export interface PageSection {
  sectionId: number;
  pageKey: string;
  header: string;
  subHeader: string;
  contentType: string;  // 'paragraph', 'bullets', 'image'
  contentText: string;
  footer: string;
  caption: string;
  sectionOrder: number;
  isActive: boolean;
  createdDate: string;
  lastModified: string;
}
