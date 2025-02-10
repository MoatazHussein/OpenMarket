import { Component } from '@angular/core';
import { AllGenericDTO, AttributeDetailsDTO, AttributeService } from '../../../core/services/attributeDetails.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ProductService } from '../../../core/services/product.service';
import { HomePageService } from '../../../core/services/home-page.service';

interface PreviewImage {
  url: string;
  file: File;
}
interface AttributeValue {
  AttributeId: number;
  Value: string;
}


@Component({
  selector: 'app-create-step3',
  templateUrl: './create-step3.component.html',
  styleUrl: './create-step3.component.css'
})
export class CreateStep3Component {
  productName: FormControl = new FormControl('',Validators.required);
  productDesc: FormControl = new FormControl('',Validators.required);
  productPrice: FormControl = new FormControl('',Validators.required);
  productImages: FormControl = new FormControl(null,Validators.required);

  attributes: AttributeDetailsDTO[] = [];
  allAttributes: AttributeDetailsDTO[] = [];
  attributeForm: FormGroup = new FormGroup({
    Name: this.productName,
    Description: this.productDesc,
    Price: this.productPrice,
    Images: this.productImages
  });
  subCategoryId: number = 0;
  attributeOptionsMap: { [key: number]: string[] } = {};
  previewImages: PreviewImage[] = [];

  constructor(
    private route: ActivatedRoute,
    private attributeService: AttributeService,
    private fb: FormBuilder,
    private homepageService: HomePageService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.subCategoryId = +paramId;
    } else {

    }
    console.log(this.attributeForm);
    this.loadAttributes();
  }

  loadAttributes() {
    this.attributeService.getAttributesBySubCategory(this.subCategoryId)
      .subscribe({
        next: (response: AllGenericDTO<AttributeDetailsDTO>) => {
          //debugger;
          this.allAttributes = response.values;
          this.attributes = response.values.filter(i => i.subCategoryId == this.subCategoryId);
          
          this.initializeForm();
        },
        error: (error) => {
          console.error('Error loading attributes', error);
        }
      });
  }

  initializeForm() {
    const formControls: { [key: string]: any } = {};
    
    this.attributes.forEach(attribute => {
      const controlName = `attribute_${attribute.id}`;
      if(attribute.type == '0' && attribute.filterId == null){

        this.attributeService.getDropdownOptions(attribute.id).subscribe(
          {
            next: (r) => {
              this.attributeOptionsMap[attribute.id] = r;
              
            }
          }
        )
      }
      
      if(attribute.type == '0' && attribute.filterId != null){
        formControls[controlName] = [
          { value: '', disabled: true }
          , this.getValidators(attribute)
        ];
      } else {

        formControls[controlName] = [
          { value: '', disabled: false }
          , this.getValidators(attribute)
        ];
      }
      
    });

    
    this.attributeForm = this.fb.group(formControls);
    this.attributeForm.addControl('Name',this.productName);
    this.attributeForm.addControl('Description',this.productDesc);
    this.attributeForm.addControl('Price',this.productPrice);
    this.attributeForm.addControl('Images',this.productImages);
  }

  getValidators(attribute: AttributeDetailsDTO) {
    const validators = [];
    return null;
  }


  /*getDropdownOptions(attribute: AttributeDetailsDTO) {
    return this.http.get<string[]>(`https://localhost:7012/api/AttributeDetails/dataLimition/${attribute.id}`);
  }*/
  onAttributeChange(attribute: AttributeDetailsDTO){
    //debugger;
    const dependentSelects = document.querySelectorAll(`select[data-parent="${attribute.id}"]`);
    
    dependentSelects.forEach((select: any) => {
      const dependentAttributeId = +select.getAttribute('data-id');
      
      select.innerHTML = '<option value=""></option>';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      this.getDropdownOptionsForDependentAttribute(attribute, dependentAttributeId)
        .subscribe({
          next: (options) => {
            this.attributeForm.get(`attribute_${dependentAttributeId}`)?.disable();
            options.forEach(option => {
              const optionElement = document.createElement('option');
              optionElement.value = option;
              optionElement.textContent = option;
              select.appendChild(optionElement);
              this.attributeForm.get(`attribute_${dependentAttributeId}`)?.enable();
            });
            
          },
          error: (error) => {
            console.error('Error fetching dependent options', error);
          }
        });
    });
  }

  getDropdownOptionsForDependentAttribute(parentAttribute: AttributeDetailsDTO, dependentAttributeId: number): Observable<string[]> {

    const parentSelectedValue = this.attributeForm.get(`attribute_${parentAttribute.id}`)?.value;

    return this.attributeService.getDependentDropdownOptions(dependentAttributeId)
      .pipe(
        map(response => {
          const filteredOptions = response.detailRows
            .filter(row => row.dataLimition == parentSelectedValue)
            .map(row => row.type);
          
          return filteredOptions;
        })
      );

  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      
      files.forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          
          reader.onload = () => {
            this.previewImages.push({
              url: reader.result as string,
              file: file
            });
          };
          
          reader.readAsDataURL(file);
        }
      });
      
      this.attributeForm.patchValue({
        Images: files
      });
    }
  }

  removeImage(index: number) {
    this.previewImages.splice(index, 1);
    const currentFiles = this.attributeForm.get('images')?.value;
    if (Array.isArray(currentFiles)) {
      currentFiles.splice(index, 1);
      this.attributeForm.patchValue({
        images: currentFiles
      });
    }
  }


  onSubmit() {
    if (this.attributeForm.valid) {
      this.homepageService.isLoading.next(true);

      this.productService.addProduct(this.attributeForm,this.subCategoryId,this.previewImages).subscribe({
        next: () => {
          console.log('Success');
          this.homepageService.isLoading.next(false);
          this.router.navigate(['/home']);
        },error: (error) => {
          console.error('Error adding product:', error);
          this.homepageService.isLoading.next(false);
        } 
      });

    }
  }




}
