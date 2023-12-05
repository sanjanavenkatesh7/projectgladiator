trigger MerchTrigger on Merchandise__c (before insert, after insert, before update, after update,before delete,after delete,after undelete)
{
    if(Trigger.isDelete && Trigger.isBefore) {
        MerchandiseArchiveInsert.insertMerch(Trigger.old);
        }    

}