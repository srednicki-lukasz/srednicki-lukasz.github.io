import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Certificate {
    id: string;
    name: string;
    credentialUrl: string;
    issuingOrganization: string;
}

const certificates: Certificate[] = [
    { id: '21939382-1060', name: 'SQL', issuingOrganization: 'SoloLearn', credentialUrl: 'https://www.sololearn.com/certificates/course/en/21939382/1060/landscape/png' },
    { id: '21939382-1024', name: 'JavaScript', issuingOrganization: 'SoloLearn', credentialUrl: 'https://www.sololearn.com/certificates/course/en/21939382/1024/landscape/png' },
    { id: '1097-21939382', name: 'React + Redux', issuingOrganization: 'SoloLearn', credentialUrl: 'https://www.sololearn.com/Certificate/1097-21939382/pdf' },
    { id: '1162-21939382', name: 'Responsive Web Design', issuingOrganization: 'SoloLearn', credentialUrl: 'https://www.sololearn.com/Certificate/1162-21939382/pdf' },
    { id: '1082-21939382', name: 'jQuery', issuingOrganization: 'SoloLearn', credentialUrl: 'https://www.sololearn.com/Certificate/1082-21939382/pdf' },
    { id: 'UC-d4ec337a-70a0-4acf-ac93-8e95d2fb809a', name: 'Bootstrap', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-d4ec337a-70a0-4acf-ac93-8e95d2fb809a' },
    { id: 'UC-c6104014-59ff-4f46-b8d0-3bfc8bf6d94e', name: 'JavaScript, Bootstrap, PHP', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-c6104014-59ff-4f46-b8d0-3bfc8bf6d94e' },
    { id: 'UC-5ad60937-471b-458e-9676-0a828851e785', name: 'Wordpress', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-5ad60937-471b-458e-9676-0a828851e785' },
    { id: 'UC-a07fe94e-3c66-4364-be44-9b7c37b673e4', name: 'Android Widgets', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-a07fe94e-3c66-4364-be44-9b7c37b673e4' },
    { id: 'UC-a3ecfac1-1988-4b1f-9539-b5829a02d774', name: 'Scrum Fundamentals', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-a3ecfac1-1988-4b1f-9539-b5829a02d774' },
    { id: 'UC-8b20f1e8-a297-4078-91f7-080dad8f6149', name: 'Android Penetration Testing', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-8b20f1e8-a297-4078-91f7-080dad8f6149' },
    { id: 'UC-2298c41f-3c30-4f7d-8f54-25143162ef33', name: 'CSS3', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-2298c41f-3c30-4f7d-8f54-25143162ef33' },
    { id: 'UC-3986d56e-92c6-4edb-be84-5986e8a7ce32', name: 'HTML5', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-3986d56e-92c6-4edb-be84-5986e8a7ce32' },
    { id: 'UC-H0LZ1CUZ', name: 'Angular 2+', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-H0LZ1CUZ' },
    { id: 'UC-1KI6MOIN', name: 'Angular 5', issuingOrganization: 'Udemy', credentialUrl: 'https://ude.my/UC-1KI6MOIN' },
];

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.component.html',
    styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Repositories data source.
     * @memberof CertificatesComponent
     */
    public dataSource: any;

    /**
     * Table page size options.
     * @memberof ProjectsComponent
     */
    public pageSizeOptions = [5, 10, 20];

    /**
     * Table columns.
     * @memberof ProjectsComponent
     */
    public columns = ['index', 'name', 'link'];

    constructor() {}

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(certificates);
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
}
