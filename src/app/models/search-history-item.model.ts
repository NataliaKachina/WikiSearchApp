export class SearchHistoryItem {
  date?: Date;
  query: string;


  constructor(query: string, date?: Date) {
    this.date = date;
    this.query = query;
  }
}
