const report= require("multiple-cucumber-html-reporter")
report.generate({
    jsonDir:"cypress/cucumber-json",
    reporPath:"./reports/cucumber",
    metaData:{
        browser:{
            mame:"chrome",
            version:"104",
             
        },
        device:"PC",
        platform:{
            name:"Windows",
            version:"10"
        }
    }
})