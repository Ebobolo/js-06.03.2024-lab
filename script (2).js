class infoNews {
    constructor (heading, text, arrayTags,date ) {
      this.heading=heading
      this.text=text
      this.arrayTags=arrayTags
      this.date=date
  
    }
    getDate(){    
         let today = new Date(),          
         yesterday = today.getDate() -1,           
         roomLastMessageDate = new Date(dateTime);           
     if (dateTime) {
         if (today == roomLastMessageDate) {                                                                
             return 'Сегодня'                                                                                
         } else if (yesterday == roomLastMessageDate) {                                                     
             return 'Вчера'                                                                                  
         } else {                                                                                            
             return roomLastMessageDate;     
    }
  }
    }
    conclusion(){
        document.write(`< style="font-size:20px${this.heading}  font-size:10px${this.getDate} font-size:15px${this.text}  font-size:10px${this.arrayTags}`)
      }
      
    }
  
  
   let foo= new infoNews ('НОВОСТЬ ДНЯ ', 'Вы также можете сделать это, чтобы получить дату на сегодня, завтра и вчера. ... Начиная с 2.10.5 moment поддерживает указание форматов вывода календаря для', '#lorem #lorem #lorem' )
  foo.conclusion(infoNews)