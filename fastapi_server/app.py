from fastapi import FastAPI
from pydantic import BaseModel
class student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword:str
    stuage:int
    stumark:float

app=FastAPI()


#localhost:8000/getstudents
@app.get("/getStudents")
def getStudents():
    return "Get students method called"
#localhost:8000/add student
@app.post("/addstudent")
def addStudent(stu:student):
    return {"student_details":stu}
#try two more routes
#/updateStudent=> put & /deletestudent => delete
@app.put("/updatestudent")
def updateStudent():
    return "update student method called"
@app.delete("/deletestudent")
def deleteStudent():
    return "deletestudent method called"
@app.get("/getParticularStudent/{id}")
def getParticularStudent(id:int):
    return {"userid":id}
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return {"dept":dept,"mark":mark}

