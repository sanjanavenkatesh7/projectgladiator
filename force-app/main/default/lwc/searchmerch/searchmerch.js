import { LightningElement} from 'lwc';
import getMerchandise from '@salesforce/apex/SearchMerchandiseInfo.getMerchandise';

export default class Searchmerch extends LightningElement {
    accName;
    accStock;

    handleOnChangeaccName(event){
        this.accName = event.target.value;
    }
    handleOnChangeaccPhone(event){
        this.accStock = event.target.value;
    }
    clearData(){
        this.accName = '';
        this.accStock = '';
        this.dispatchEvent(new CustomEvent('cleardata',null))
    }
    
    initiateSearch(event){
        
        if(!this.accStock){
            this.accStock = '0';
        }

    
        getMerchandise({searchTerm:this.accName,s:this.accPhone}).then(results=>{
            this.dispatchEvent(new CustomEvent('getaccountdata',{detail:results}));
        }).catch(error=>{
            console.log(error);
        })
    }
 
}