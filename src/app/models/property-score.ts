export interface PropertyScore {
    id?:string;
    inspectionDocumentLink?:string;
    name?:string;
    isComplete?: boolean;
    description?:string;
    thirdPartyScore?:number;
    automatedScore?:number;
    fraudScore?:number;
}