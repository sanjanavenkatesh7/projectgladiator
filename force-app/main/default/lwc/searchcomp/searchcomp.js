import { LightningElement,api } from 'lwc';

const columns=[
    {label:'Merchandise id', fieldName:'id'},
    {label:'Merchandise Name', fieldName:'Name'},
    //{label:'Merchandise Description', fieldName:'id'}
];

export default class Searchcomp extends LightningElement {
    columns = columns;
    @api searchresults=[];

}