import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { environment } from "../../../environments/environment";
import { inject, Injectable } from "@angular/core";
import { ProductService } from "./product.service";

@Injectable()

export class productResolverService{

}

export const productResolver : ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let productID = route.params['id'];
    return inject(ProductService).getProduct(productID);
  };
