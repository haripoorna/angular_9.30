import { MessageService } from './_services/message.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: any = '';
  dataList: Array<any>;
  fileReaded: any;
  messageObject:any;
  



  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  // line, area
  autoScale = true;

  constructor(private messageService: MessageService){
    this.dataList = [{ name: "series1", series: [
    {
      "name": "2010",
      "value": 7300000
    },
    {
      "name": "2011",
      "value": 8940000
    }
  ] }];
   this.messageService.sendMessage().subscribe((message:any )=> {
      this.messageObject = message;
  })

  }
  csv2Array(fileInput: any) {
    this.fileReaded = fileInput.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsText(this.fileReaded);

    reader.onload = (e) => {
      const csv: string = reader.result;
      const allTextLines = csv.split(/\r|\n|\r/);
      const headers = allTextLines[0].split(',');
      const lines = [];

      for (let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        const data = allTextLines[i].split(',');
        if (data.length === headers.length) {
          const tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }

          // log each row to see output
          console.log(tarr);
          lines.push(tarr);
        }
      }
      lines[0].forEach(function(element){
        const splitArray = element.split('|');
        console.log(splitArray);
        if (splitArray.length > 1) {
          const data = {
            name: 'series1',
            series: []
          }
          const seriesELement: Object = {
                name : splitArray[0],
                value : splitArray[1]
              }
              data.series.push(seriesELement);
              console.log(data);
          }
      });
      // all rows in the csv file 
      console.log('>>>>>>>>>>>>>>>>>', lines);
    }
  }
// onSelect(event) {
//     console.log(event);
//   } 
// }
}
