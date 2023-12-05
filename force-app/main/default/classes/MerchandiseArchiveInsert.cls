public class MerchandiseArchiveInsert {
    public static void insertMerch(List<Merchandise__c> mer){
        Merchandise_Archive__c ma;
        List<Merchandise_Archive__c> malist= new List<Merchandise_Archive__c>();
        for(Merchandise__c m:mer){
            ma=new Merchandise_Archive__c();
            ma.Name=m.Name;
            malist.add(ma);
        }
        insert malist;
    }

}