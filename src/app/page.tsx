'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function SendPattern(e: any){
        e.preventDefault();
    
        const data = {
            Pattern: (e.target.pattern.value),
            String: (e.target.string.value)
        }

        let separatePattern = data.Pattern.split("")
        const separateString = data.String.split(" ")
        const separateString2:Array<string> = new Array<string>();
        separateString2.push(separateString[0].split(""))
        separateString2.push(separateString[1].split(""))
        separateString2.push(separateString[2].split(""))
        separateString2.push(separateString[3].split(""))
        
        for(let item of separateString[0].split("")){
          if (separatePattern[0] == item) {
            alert("False")
            return 0;
          }
        }
        
        for(let item of separateString[1].split("")){
          if (separatePattern[1] == item) {
            alert("False")
            return 0;
          }
        }
        
        for(let item of separateString[2].split("")){
          if (separatePattern[2] == item) {
            alert("False")
            return 0;
          }
        }
        
        for(let item of separateString[3].split("")){
          if (separatePattern[3] == item) {
            alert("False")
            return 0;
          }
        }
        
        alert("True")

      }
      


  return (
      <form onSubmit={SendPattern} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3 mx-auto">
                    <label>Pattern</label>
                    <input type="text" maxLength={4} className="form-control" id="pattern" required aria-describedby="emailHelp " />
                </div>
                <div className="form-group mb-3  mx-auto">
                    <label>String</label>
                    <input type="text" className="form-control" id="string" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Data</button>
        </div>
    </form>
  );
}
