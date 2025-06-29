
const envBaseURL = process.env.VUE_APP_API;
const envImgUrl = process.env.VUE_APP_IMAGE_URL;

// import KTLayoutSidebarImport from "@/assets/js/layout/extended/sidebar-import.js";
// import KTOffcanvas from "@/assets/js/components/offcanvas.js";

const closeOffcanvas = function () {
      new KTOffcanvas(KTLayoutSidebarImport.getElement()).hide();
};

const dataFlattening = function (list, transform) {
    
    let newlist = [];

    // console.log("dataFlattening list  >>> ", list);
    // console.log("dataFlattening transform  >>> ",transform);

    for (let ind = 0; ind < list.length; ind++) {
        
        const ele = list[ind];
        // console.log(ind,".  ele >>> ", ele);
        let newele = {};
        
        for (let j = 0; j < transform.length; j++) {

            const tr = transform[j];
            let tr_from = tr["from"];
            let spt = tr_from.split(".")

            // console.log("&&&&&&&&&&&&&&&&&&& transform[j]  >>> ",transform[j]);
            // console.log(j,". &&&&&&&&&&&&&&&&&&& tr_from  >>> ",tr_from);
            // console.log(j,". &&&&&&&&&&&&&&&&&&& spt length >>> ",spt);
            // console.log("tr_from >>> ",tr_from);

            switch (spt.length) {
                case 1:
                    // console.log("CASE1 >>> ",ele[spt]);
                    newele[tr["to"]] = ele[spt];
                    // console.log(ele[spt]);
                    break;
                
                case 2:
                    // console.log("CASE2 >>> ",ele[spt[0]]);
                    if (ele[spt[0]] === null || ele[spt[0]] === undefined) {
                        newele[tr["to"]] = "ไม่ระบุ";
                    }
                    else {
                        newele[tr["to"]] = ele[spt[0]][spt[1]];
                    }
                    
                    // console.log(ele[spt[0]][spt[1]]);
                    break;

                case 3:
                    // console.log("CASE3 >>> ",ele[spt[0]]);
                    if (ele[spt[0]] === null || ele[spt[0]] === undefined) {
                        newele[tr["to"]] = "ไม่ระบุ";
                    }
                    else if (ele[spt[0]][spt[1]] === null || ele[spt[0]][spt[1]] === undefined) {
                        newele[tr["to"]] = "ไม่ระบุ";
                    } else {
                        newele[tr["to"]] = ele[spt[0]][spt[1]][spt[2]];
                        
                    }

                    // console.log(ele[spt[0]][spt[1]][spt[2]]);
                    break;
            
                default:
                    newele[tr["to"]] = ele[spt];
                    break;
            }
            

        }
        // console.log("newele >>> ",newele);
        newlist.push(newele);


        
    }

    // console.log("newlist >>> ",newlist);


    return newlist;
};


const formatDate = function (date) {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
  };
      

const dataTransform = function(list, transform){
    // let list = item.list;
    // let transform = item.transform;

      if(list === null || list === undefined){
          return [];
        }

        list.forEach((item, ind) => { 

              
          
              for (let index = 0; index < transform.length; index++) {
                
                const ele = transform[index];

                //*************************************************************
                //***********************  type: condition ********************
                //*************************************************************

                if (ele["type"] === "condition")
                {
                      let mappingArr = ele["mapping"];

                      const mappingIndex /* [1] */ =  mappingArr.findIndex(object => {
                            return object.from /* [3] */ === item[ele["keyCondition"]] /* [4] */ ; // item[ele["keyCondition"]] เป็นค่าที่จะใช้ map
                      });

                      if (mappingIndex >= 0)
                      {
                        item[ele["keyResult"]] = mappingArr[mappingIndex]["to"];
                      } else {
                        item[ele["keyResult"]] =  ele["defaultTo"];
                      }
                } 

                //*************************************************************
                //***********************  type: condition logic **************
                //*************************************************************

                if (ele["type"] === "conditionLogic")
                {

                  //  console.log("xxxxxxx conditionLogic ");
                      let mappingArr = ele["mapping"];

                      let result = ele["defaultTo"];

                      for (let ind = 0; ind < mappingArr.length; ind++) {
                        const object = mappingArr[ind];

                        // console.log("xxxxxxx conditionLogic object ****  ",object);

                         if(object.logic === "gteq")
                         {
                          //  console.log("xxxxxxx IN GETEQ  ");
                           
                          //  console.log("item[ele['keyCondition']] >>>  ",item[ele["keyCondition"]] , "   object.comparison >>>>  ", object.comparison);

                              if (item[ele["keyCondition"]] >= object.comparison) {
                                result = object.to;
                                
                                // console.log("gteq object.comparison >>> ",object.comparison , " item key_condition >>> " , item[ele["keyCondition"]]);
                              }
                              
                            }else if(object.logic === "gt"){
                                if (item[ele["keyCondition"]]  > object.comparison ) result = object.to;
                            }
                            else if(object.logic === "lseq"){
                                if (item[ele["keyCondition"]]  <= object.comparison ) result = object.to;
                            }
                            else if(object.logic === "ls"){
                                    if (item[ele["keyCondition"]]  < object.comparison ) result = object.to;
                            }
                            else if(object.logic === "eq"){
                                    if (item[ele["keyCondition"]]  === object.comparison ) result = object.to;
                            }
                            else if(object.logic === "inq"){
                                    if (item[ele["keyCondition"]]  !== object.comparison ) result = object.to;
                            }
                        
                      }

                      // const mappingIndex /* [1] */ = mappingArr.findIndex(object => {
                          
                            

                           
                            
                          
                      // });

                      item[ele["keyResult"]] = result;

                      // if (mappingIndex >= 0)
                      // {
                      //   // item[ele["keyResult"]] = mappingArr[mappingIndex]["to"];
                        
                      // } else {
                      //   item[ele["keyResult"]] =  ele["defaultTo"];
                      // }
                } 



                //*************************************************************
                //***********************  type: link ********************
                //*************************************************************

                else if (ele["type"] === "link") {
                  item[ele["keyResult"]] =  (item[ele["useField"]] === null || item[ele["useField"]] === undefined || item[ele["useField"]] === "") ? /* เช็คก่อนถ้าเป็น null ใช้ default link */
                                                                                ele["defaultTo"] /* default link */
                                                                              : ele["mapUrl"] + ele["mapText"] + item[ele["useField"]] /* link + "/" + id */;

                }


                //*************************************************************
                //***********************  type: concat ********************
                //*************************************************************

                else if (ele["type"] === "concat") {

                  item[ele["useField1"]] = (item[ele["useField1"]] === null || item[ele["useField1"]] === undefined) ? "" : item[ele["useField1"]].toString();
                  item[ele["useField2"]] = (item[ele["useField2"]] === null || item[ele["useField2"]] === undefined) ? "" : item[ele["useField2"]].toString();
                  
                  ele["mapTextPrefix"] = (ele["mapTextPrefix"] === null || ele["mapTextPrefix"] === undefined) ? "" : ele["mapTextPrefix"];  
                  ele["mapTextBetween"] = (ele["mapTextBetween"] === null || ele["mapTextBetween"] === undefined) ? "" : ele["mapTextBetween"];  
                  ele["mapTextSuffix"] = (ele["mapTextSuffix"] === null || ele["mapTextSuffix"] === undefined) ? "" : ele["mapTextSuffix"];  
                 


                  item[ele["keyResult"]] =
                      ele["mapTextPrefix"]  
                    + item[ele["useField1"]]
                    + ele["mapTextBetween"] 
                    + item[ele["useField2"]]
                    + ele["mapTextSuffix"] 
                    ;/* link + "/" + id */

                  // console.log(" ele[keyResult] ", item[ele["keyResult"]]); 
                  

                }

                //*************************************************************
                //*************  type: concat2 ถ้าไม่มี ไม่ต้องแสดงเลย *************
                //*************************************************************

                else if (ele["type"] === "concat2") {

                        item[ele["useField1"]] = (item[ele["useField1"]] === null || item[ele["useField1"]] === undefined) ? "" : item[ele["useField1"]].toString();
                        item[ele["useField2"]] = (item[ele["useField2"]] === null || item[ele["useField2"]] === undefined) ? "" : item[ele["useField2"]].toString();
                        
                        ele["mapTextPrefix"] = (ele["mapTextPrefix"] === null || ele["mapTextPrefix"] === undefined) ? "" : ele["mapTextPrefix"];  
                        ele["mapTextBetween"] = (ele["mapTextBetween"] === null || ele["mapTextBetween"] === undefined) ? "" : ele["mapTextBetween"];  
                        ele["mapTextSuffix"] = (ele["mapTextSuffix"] === null || ele["mapTextSuffix"] === undefined) ? "" : ele["mapTextSuffix"];  
                      
                        if (item[ele["useField1"]] === null || item[ele["useField1"]] === undefined  || item[ele["useField1"]] === "") {
                          item[ele["keyResult"]] = null
                        } else {
                          
                          if (ele["field1Type"] === "datetime") {
                            item[ele["useField1"]] = formatDate(item[ele["useField1"]]);
                          }

                          if (ele["field2Type"] === "datetime") {
                            item[ele["useField2"]] = formatDate(item[ele["useField2"]]);
                          }

                            item[ele["keyResult"]] =
                            ele["mapTextPrefix"]  
                          + item[ele["useField1"]]
                          + ele["mapTextBetween"] 
                          + item[ele["useField2"]]
                          + ele["mapTextSuffix"] 
                          ;/* link + "/" + id */

                        // console.log(" ele[keyResult] ", item[ele["keyResult"]]); 
                        }

                   

                 
                  

                }

                //*************************************************************
                //***********************  type: link ********************
                //*************************************************************

                else if (ele["type"] === "date_th") {
                  
                      // console.log("index : (", ind, ",", index, ") ", ele["useField"], " :::::  item[ele[useField]] >>> ", item[ele["useField"]]);
                  
                      if (item[ele["useField"]] === null || item[ele["useField"]] === undefined || item[ele["useField"]] === "ไม่ระบุ" || Number.isNaN(item[ele["useField"]])) {
                        item[ele["keyResult"]] = "ไม่ระบุ";
                      } else {
                        var d = new Date(item[ele["useField"]]),
                        month_ind = d.getMonth() ,
                        day =  d.getDate(),
                        year = d.getFullYear();

                        var month_arr = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

                        var month_str = month_arr[month_ind];

                        // if (month.length < 2) month = '0' + month;
                        // if (day.length < 2) day = '0' + day;

                        item[ele["keyResult"]] = [ day, month_str ,  year].join(' ');
                      }
                          
          

                        

                   
                }

                // console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "); 
                
                // console.log( "index : (", ind ,",",index , ") " , ele["keyResult"] ,  " :::::  item[ele[keyResult]] >>> ", item[ele["keyResult"]]);
                
                // console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");

                
              }
          
        });

        // console.log("%%%%%%%%%% transformList AFTER TRANSFORM >>> ",list);

        return list;
      
    };


export  {
  dataTransform,
  closeOffcanvas,
  dataFlattening
};
