type MonthName = 
  | "January" | "February" | "March" | "April" | "May" | "June" 
  | "July" | "August" | "September" | "October" | "November" | "December";

export type TAcademicSemister ={
    name:'Autom'|'Summer'| 'Fall',
    semisterCode:'01'|'02'|'03',
    year:Date,
    startMonth:MonthName,
    endMonth:MonthName,


}