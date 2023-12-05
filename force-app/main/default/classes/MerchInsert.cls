@RestResource(urlMapping='/newMerch/*')
global class MerchInsert {
    @httpPost
  	global static void newMerch(List<Merchandise__c> mer){ 
            insert mer; 
    }

}