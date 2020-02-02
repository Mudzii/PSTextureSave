


function CreateUI(mPath, oName, pName, oType){
    
var panelWidth = 250; 
var detaultPath = new Folder("~/desktop");

// ================= Main Window =====================
var UI = new Window("dialog"); 
    UI.text = "Texture Quicksave"; 
    UI.preferredSize = [300, 200]; 
    UI.orientation = "column"; 
    UI.alignChildren = ["center","top"]; 
    UI.spacing = 10; 
    UI.margins = 10; 

//  ======== OBJSPECS PANEL  ========
var objPanel = UI.add("panel", undefined, undefined, {name: "objPanel"}); 
    objPanel.preferredSize.width = panelWidth; 
    objPanel.orientation = "column"; 
    objPanel.alignChildren = ["left","top"]; 
    objPanel.spacing = 10; 
    objPanel.margins = 10; 

// ==== PATH ====
var pathGrp = objPanel.add("group", undefined, {name: "pathGrp"}); 
    pathGrp.orientation = "row"; 
    pathGrp.alignChildren = ["left","center"]; 
    pathGrp.spacing = 10; 
    pathGrp.margins = 0; 

var pathText = pathGrp.add("statictext", undefined, undefined, {name: "pathText"}); 
    pathText.text = "path:"; 
    
var pathInputText = pathGrp.add('edittext {properties: {name: "pathInputText"}}'); 
    pathInputText.text = "desktop"; 
    pathInputText.preferredSize.width = 100; 
    pathInputText.enabled = false; 
    
var pathBtn = pathGrp.add("button", undefined, undefined, {name: "pathBtn"}); 
    pathBtn.text = "path"; 
    
    pathBtn.onClick = function (){  
  
          var folder = detaultPath.selectDlg("Choose Folder:");
          
          if(folder != null){        
              pathInputText.text = folder.toString(); 
              mPath = folder; 
              $.writeln('Path: ');
           }       
     }  
 
    
     
// === OBJ ===
var objGrp = objPanel.add("group", undefined, {name: "objGrp"}); 
    objGrp.orientation = "row"; 
    objGrp.alignChildren = ["left","center"]; 
    objGrp.spacing = 10; 
    objGrp.margins = 0; 
    objGrp.alignment = ["left","top"]; 

var objNameText = objGrp.add("statictext", undefined, undefined, {name: "objNameText"}); 
    objNameText.text = "object name:"; 
    objNameText.alignment = ["left","center"]; 

var objNameInputText = objGrp.add('edittext {properties: {name: "objNameInputText"}}'); 
    objNameInputText.text = "enter object name"; 
    objNameInputText.preferredSize.width = 140; 
     
    objNameInputText.onChange = function() {
      
       oName = objNameInputText.text; 
     }
 
 
// === PART ===
var partGrp = objPanel.add("group", undefined, {name: "partGrp"}); 
    partGrp.orientation = "row"; 
    partGrp.alignChildren = ["left","center"]; 
    partGrp.spacing = 10; 
    partGrp.margins = 0; 

var partNameText = partGrp.add("statictext", undefined, undefined, {name: "partNameText"}); 
    partNameText.text = "part name:"; 

var partNameInputText = partGrp.add('edittext {properties: {name: "partNameInputText"}}'); 
    partNameInputText.text = "enter part name "; 
    partNameInputText.preferredSize.width = 150; 
    
     partNameInputText.onChange = function() {
      
       pName = partNameInputText.text; 
     }
    
// === TYPE ===
var typeSelectGrp = objPanel.add("group", undefined, {name: "typeSelectGrp"}); 
    typeSelectGrp.orientation = "row"; 
    typeSelectGrp.alignChildren = ["left","center"]; 
    typeSelectGrp.spacing = 10; 
    typeSelectGrp.margins = 0; 

var typeText = typeSelectGrp.add("statictext", undefined, undefined, {name: "typeText"}); 
    typeText.text = "texture type:"; 

var typeArray = ["diffuse","normal","emissive","opacity","specular","gloss"]; 
var typeDropList = typeSelectGrp.add("dropdownlist", undefined, undefined, {name: "typeDropList", items: typeArray}); 
    typeDropList.selection = 0; 
    typeDropList.preferredSize.width = 140; 
    typeDropList.preferredSize.height = 23; 
    
    oType = typeArray[typeDropList.selection.index];
    
     typeDropList.onChange = function() {
       oType = typeArray[typeDropList.selection.index];
    }
    
//  ======== BUTTON PANEL  ========
var buttonPanel = UI.add("panel", undefined, undefined, {name: "buttonPanel"}); 
    buttonPanel.preferredSize.width = panelWidth; 
    buttonPanel.orientation = "column"; 
    buttonPanel.alignChildren = ["left","top"]; 
    buttonPanel.spacing = 10; 
    buttonPanel.margins = 10; 

// ====== BTN GRP ======
var btnGrp = buttonPanel.add("group", undefined, {name: "btnGrp"}); 
    btnGrp.orientation = "row"; 
    btnGrp.alignChildren = ["center","top"]; 
    btnGrp.spacing = 10; 
    btnGrp.margins = 0; 
    btnGrp.alignment = ["center","top"]; 

var saveBtn = btnGrp.add("button", undefined, undefined, {name: "saveBtn"}); 
    saveBtn.text = "Save"; 
    
    saveBtn.onClick = function (){  
            
            //var msg = "Path: " + mPath.toString() + " Name: " + oName.toString() + " Part: " + pName.toString() + " Type:" + oType.toString();      
            $.writeln("Path: " + mPath + " Name: " + oName + " Part: " + pName + " Type: " + oType); 
            CreateFolders(mPath, oName);
   }  
 
    
var cancelBtn = btnGrp.add("button", undefined, undefined, {name: "cancelBtn"}); 
    cancelBtn.text = "Cancel"; 

return UI; 

}






function Save(){
    
}

function CreateFolders(mPath, oName){
    
    var newFolder = new Folder(mPath + "/" + oName);

     if(!newFolder.exists){
            
             $.writeln("Folder does not exist"); 
             $.writeln(newFolder); 
             newFolder.create(); 
     }
    
}

var mainPath = ""; 
var objName = ""; 
var partName = ""; 
var objType = ""; 

var win = CreateUI(mainPath, objName, partName, objType); 
win.show();
