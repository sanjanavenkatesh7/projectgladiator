import { LightningElement } from 'lwc';

export default class Parentmerch extends LightningElement {
    searchDetail=[];
    handleMerchandise(event){
        this.searchDetail=[];
        //alert('See the Magic, I am from child');
        alert(event.detail);
        try{
            event.detail.forEach(x => { 
                var merData={
                    id:x.Id,
                    Name:x.Name

                }
                this.searchDetail.push(merData);
            });
        }catch(e){
            console.log(e);
        }
    }
}