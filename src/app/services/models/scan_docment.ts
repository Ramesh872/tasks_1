export class ScanDocument {
    constructor(
        public Tenant_ID: number,
        public limit: string,
        public pageNo: string,
        public order: string,
        public search: string,
        public fieldName: string,
        public startDate: string,
        public endDate: string,
        public status: number
    ) {}
} 