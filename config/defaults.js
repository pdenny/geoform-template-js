define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "0212e67f6bba4a37a18b49e5f6e1ec7a",
    "webmap": "430d8cb4ab77479c88342a933255edf7",
    "form_layer": {
        "id": "Permits_App_3204"
    },
    "details": {
      "Title": "Driveway Permit Application",
      "Logo": "",
      "Description": "<p>Please fill out each field below.&nbsp; If you have questions or need assistance submitting an application please contact the Permit Center at (907) 861-7822.</p>"
    },
    "fields": {
            "Permits_App_3204": [
                {
                    "name": "PermitType",
                    "alias": "PermitType",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "dropdown"
                },
                {
                    "name": "Status",
                    "alias": "Status",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "dropdown"
                },
                {
                    "name": "P_ID",
                    "alias": "P_ID",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "textbox"
                },
                {
                    "name": "SiteAddress",
                    "alias": "Site Address",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "AccessOnto",
                    "alias": "Access Onto",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "DrivewayMarker",
                    "alias": "Driveway Marker",
                    "fieldDescription": "If the driveway is already constructed, enter Existing.",
                    "visible": true,
                    "displayType": "dropdown"
                },
                {
                    "name": "ExpectedCompletionDate",
                    "alias": "Expected Completion Date",
                    "fieldDescription": "",
                    "visible": true,
                    "preventPast": false,
                    "preventFuture": false,
                    "setCurrentDate": false,
                    "hiddenDate": false
                },
                {
                    "name": "OwnerName",
                    "alias": "Owner Name",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "OwnerMailingAddress",
                    "alias": "Owner Mailing Address",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "OwnerCity",
                    "alias": "Owner City",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "OwnerState",
                    "alias": "Owner State",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "OwnerZip",
                    "alias": "Owner Zip",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "OwnerPhone",
                    "alias": "Owner Phone",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "OwnerFax",
                    "alias": "Owner Fax",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "OwnerEmail",
                    "alias": "Owner Email",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "ApplicantName",
                    "alias": "Applicant Name",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "ApplicantMailingAddress",
                    "alias": "Applicant Mailing Address",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "ApplicantCity",
                    "alias": "Applicant City",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "ApplicantState",
                    "alias": "Applicant State",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "ApplicantZip",
                    "alias": "Applicant Zip",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "ApplicantPhone",
                    "alias": "Applicant Phone",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "ApplicantFax",
                    "alias": "Applicant Fax",
                    "fieldDescription": "",
                    "visible": true
                },
                {
                    "name": "ApplicantEmail",
                    "alias": "Applicant Email",
                    "fieldDescription": "",
                    "visible": true,
                    "displayType": "text"
                },
                {
                    "name": "FinalApprovalDate",
                    "alias": "Final Approval Date",
                    "fieldDescription": "",
                    "visible": false,
                    "preventPast": false,
                    "preventFuture": false,
                    "setCurrentDate": false,
                    "hiddenDate": false
                },
                {
                    "name": "TaxAccount",
                    "alias": "TaxAccount",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "text"
                },
                {
                    "name": "Subdivision",
                    "alias": "Subdivision",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "text"
                },
                {
                    "name": "RSA",
                    "alias": "RSA",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "text"
                },
                {
                    "name": "PermitID",
                    "alias": "PermitID",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "textbox"
                },
                {
                    "name": "OldAppNum",
                    "alias": "OldAppNum",
                    "fieldDescription": "",
                    "visible": false
                },
                {
                    "name": "AppURL",
                    "alias": "AppURL",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "text"
                },
                {
                    "name": "Comments",
                    "alias": "Comments",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "text"
                },
                {
                    "name": "GovernPM_ID",
                    "alias": "GovernPM_ID",
                    "fieldDescription": "",
                    "visible": false,
                    "displayType": "textbox"
                }
            ]
    },
    "theme": "cerulean", // see values in themes.js
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "http://prttst.msb.matsugov.lan/DotNet/proxy.ashx",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": "https://mapportaltst.matsugov.us/arcgis",
    "units": null,
    "useSmallHeader": true,
    "enableSharing": false,
    "defaultMapExtent": false,
    "pushpinColor": "green",
    "nextBasemap": "hybrid",
    "defaultBasemap": "topo",
    "selectedTitleField": {
	    "Cartegraph_OMS_GIS_Pavement_3337": "name",
	    "Administrative_CityBoundaries_2158": "CITYNAME",
	    "PublicSafety_Addresses_209": "ACCOUNT",
	    "Permits_App_3204": "OwnerName"
    },
    "disableViewer": true,
    "enableAttachments": true,
    "attachmentIsRequired": false,
    "attachmentLabel": "",
    "attachmentHelpText": "",
    "showLayer": true,
    "disableLogo": true,
    "enableBasemapToggle": true,
    "enableOfflineSupport": false,
    "locate": true,
    "locationSearchOptions": {
        "enableMyLocation": true,
        "enableSearch": true,
        "enableLatLng": false,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
    },
    "locationSearch": true,
    //When searchExtent is true the locator will prioritize results within the current map extent.
    "searchExtent": false,
    "searchLayers":[{
        "id": "",
        "fields": []
    }],
    "attachmentInfo":{
      "Permits_App_3204": {
        "enableAttachments": true,
        "attachmentIsRequired": false,
        "attachmentLabel": "",
        "attachmentHelpText": ""
	    }
    },
    "submitButtonText": "Submit Application",
    "viewSubmissionsText": "",
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});