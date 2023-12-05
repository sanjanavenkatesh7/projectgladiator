global class InvoiceSchedule implements Schedulable{
	 global void execute(SchedulableContext sc) {
      InvoiceBatch is = new InvoiceBatch(); 
	  Database.executeBatch(is);
   }
}