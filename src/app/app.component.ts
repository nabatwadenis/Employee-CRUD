import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('fileInput') fileInput: any;
  title = 'EmployeeCRUD';

  employees: Employee[];
  employeesToDisplay: Employee[];

  employeeForm: FormGroup;

  educationOptions =[
    'High school certificate',
    'diploma',
    'graduate',
    'post graduate',
    'PHD',
  ];
  constructor(private fb: FormBuilder, private employeeService: EmployeeService){
    this.employeeForm = fb.group({})
    this.employees =[];
    this.employeesToDisplay = this.employees;
  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control('')
    });
    this.employeeService.getEmployees().subscribe(res =>{
      console.log(res);
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();    
  }

  clearForm(){
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.Birthday.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  public get FirstName(): FormControl{
    return this.employeeForm.get("firstname") as FormControl
  }
  public get LastName(): FormControl{
    return this.employeeForm.get("lastname") as FormControl
  }
  public get Birthday(): FormControl{
    return this.employeeForm.get("birthday") as FormControl
  }
  public get Gender(): FormControl{
    return this.employeeForm.get("gender") as FormControl
  }
  public get Education(): FormControl{
    return this.employeeForm.get("education") as FormControl
  }
  public get Company(): FormControl{
    return this.employeeForm.get("company") as FormControl
  }
  public get JobExperience(): FormControl{
    return this.employeeForm.get("jobExperience") as FormControl
  }
  public get Salary(): FormControl{
    return this.employeeForm.get("salary") as FormControl
  }
}
