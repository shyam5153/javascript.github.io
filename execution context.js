var title = "execution-context";
var types =  ["lexical-environment","variable-environment"];
var task = "practice" + title;

function get data(){
console.log("get know about" + types);

}
get data();

// ///Global execution context(GEC)

// // Creation Phase 
 
globalExecutionContext: {
    LexicalEnvironment: {
      EnvironmentRecord:  {
         type: "declarative",
          title: undefined,
          types: undefined,
      }

      outer:"null"
      ThisBinding: "global object or window object"
       },
       VariableEnvironment: {
         EnvironmentRecord:  {
            type: "declarative",
             task: undefined,
             
           }


       outer:"null"
            ThisBinding: "global object or window object"
             },

         }
    
//   // Execution phase

globalExecutionContext: {
    LexicalEnvironment: {
      EnvironmentRecord:  {
         type: "declarative",
          title: 'execution-context',
          types: 'lexical-environment','variable-environment',
        
        },
      
        outer:"null"
                  ThisBinding: "global object or window object"
                   },
                   VariableEnvironment: {
                     EnvironmentRecord:  {
                        type: "declarative",
                        task = "practice" + title ,
                         
                       }
                  
                       outer:"null"
                     ThisBinding: "global object or window object"
                      },
         
                  }


// ///     Function execution context(FEC)

    // // Creation Phase 

    FunctionExecutionContext: {
        LexicalEnvironment: {
          EnvironmentRecord:  {
             type: "declarative",
              title: undefined,
              types: undefined,
            
            }
          
            outer:"Global Execution context"
            ThisBinding: getdata()
             },
             VariableEnvironment: {
               EnvironmentRecord:  {
                  type: "object",
              
                   
                 }
            
                 outer:"Global Execution context"
             ThisBinding: getdata()
              },
 
          }
     

               // // Execution phase 
 
           
         FunctionExecutionContext: {
            LexicalEnvironment: {
              EnvironmentRecord:  {
                 type: "declarative",
                 title: 'execution-context',
                 types: 'lexical-environment','variable-environment',
          
                },
              
              outer:"Global Execution context"
              ThisBinding: getdata()
               },
               VariableEnvironment: {
                 EnvironmentRecord:  {
                    type: "object",
                     
                   }
                 
                 outer:"Global Execution context"
                 ThisBinding: getdata()
                  }
     
              }