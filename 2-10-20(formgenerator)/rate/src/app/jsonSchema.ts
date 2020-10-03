export const jsonSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "ProductVariant",
    "additionalProperties": false,
    "properties": {
      "productvariantid": {
        "title": "productVariantId",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
      },
      "productvariantdescription": {
        "type": "array",
        "title": "productVariantDescription",
        "minItems": 0,
        "items": {
          "title": "$ref",
          "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
        }
      },
      "productvarianteffectivedatetime": {
        "title": "productVariantEffectiveDateTime",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/dateTime"
      },
      "modules": {
        "type": "object",
        "title": "modules",
        "additionalProperties": false,
        "properties": {
          "nutritionalproductinformationmoduletype": {
            "type": "object",
            "title": "NutritionalProductInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "nutrientheader": {
                "type": "array",
                "title": "nutrientHeader",
                "minItems": 1,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/NutrientHeaderType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            },
            "required": []
          },
          "foodandbeveragepreparationinformationmoduletype": {
            "type": "object",
            "title": "FoodAndBeveragePreparationInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "servingsuggestion": {
                "type": "array",
                "title": "servingSuggestion",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
                }
              },
              "preparationmethod": {
                "type": "array",
                "title": "preparationMethod",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/PreparationMethodType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "productallergeninformationmoduletype": {
            "type": "object",
            "title": "ProductAllergenInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "allergenrelatedinformation": {
                "type": "array",
                "title": "allergenRelatedInformation",
                "minItems": 1,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/AllergenRelatedInformationType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            },
            "required": []
          },
          "productusageandsafetymoduletype": {
            "type": "object",
            "title": "ProductUsageAndSafetyModuleType",
            "additionalProperties": false,
            "properties": {
              "productusageandsafety": {
                "title": "productUsageAndSafety",
                "$ref": "#/definitions/ProductUsageAndSafetyType"
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "foodandbeverageingredientinformationmoduletype": {
            "type": "object",
            "title": "FoodAndBeverageIngredientInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "ingredientstatement": {
                "type": "array",
                "title": "ingredientStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/FormattedDescription5000Type"
                }
              },
              "additivesstatement": {
                "type": "array",
                "title": "additivesStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/FormattedDescription1000Type"
                }
              },
              "foodandbeverageingredient": {
                "type": "array",
                "title": "foodAndBeverageIngredient",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/FoodAndBeverageIngredientType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "productinstructionsmoduletype": {
            "type": "object",
            "title": "ProductInstructionsModuleType",
            "additionalProperties": false,
            "properties": {
              "consumerusageinstructions": {
                "type": "array",
                "title": "consumerUsageInstructions",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
                }
              },
              "consumerstorageinstructions": {
                "type": "array",
                "title": "consumerStorageInstructions",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
                }
              },
              "feedingguildlines": {
                "type": "array",
                "title": "feedingGuildlines",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "productclaimsandendorsementsmoduletype": {
            "type": "object",
            "title": "ProductClaimsAndEndorsementsModuleType",
            "additionalProperties": false,
            "properties": {
              "warningstatement": {
                "type": "array",
                "title": "warningStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
                }
              },
              "nutritionalclaimcode": {
                "type": "array",
                "title": "nutritionalClaimCode",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
                }
              },
              "nutritionalclaimstatement": {
                "type": "array",
                "title": "nutritionalClaimStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description5000Type"
                }
              },
              "otherclaimstatement": {
                "type": "array",
                "title": "otherClaimStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description5000Type"
                }
              },
              "healthclaimdescription": {
                "type": "array",
                "title": "healthClaimDescription",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
                }
              },
              "dietaryclaimcode": {
                "type": "array",
                "title": "dietaryClaimCode",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
                }
              },
              "accreditationinformation": {
                "type": "array",
                "title": "accreditationInformation",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/AccreditationInformationType"
                }
              },
              "regulatorycompliance": {
                "type": "array",
                "title": "regulatoryCompliance",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/RegulatoryComplianceType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "productorigininformationmoduletype": {
            "type": "object",
            "title": "ProductOriginInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "productoriginstatement": {
                "type": "array",
                "title": "productOriginStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description200Type"
                }
              },
              "productprovenancestatement": {
                "type": "array",
                "title": "productProvenanceStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description200Type"
                }
              },
              "countryoforigin": {
                "type": "array",
                "title": "countryOfOrigin",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/CountryType"
                }
              },
              "productactivitydetails": {
                "type": "array",
                "title": "productActivityDetails",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/ProductActivityDetailsType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "basicproductinformationmoduletype": {
            "type": "object",
            "title": "BasicProductInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "productname": {
                "type": "array",
                "title": "productName",
                "minItems": 1,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description80Type"
                }
              },
              "consumermarketingdescription": {
                "type": "array",
                "title": "consumerMarketingDescription",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
                }
              },
              "gpccategorycode": {
                "title": "gpcCategoryCode",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
              },
              "regulatedproductname": {
                "type": "array",
                "title": "regulatedProductName",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description500Type"
                }
              },
              "functionalname": {
                "type": "array",
                "title": "functionalName",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description35Type"
                }
              },
              "drugidentificationnumber": {
                "title": "drugIdentificationNumber",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
              },
              "brandnameinformation": {
                "title": "brandNameInformation",
                "$ref": "#/definitions/BrandNameInformationType"
              },
              "declaration": {
                "type": "array",
                "title": "declaration",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/DeclarationStatementType"
                }
              },
              "productinformationlink": {
                "type": "array",
                "title": "productInformationLink",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/ProductInformationLinkType"
                }
              },
              "imagelink": {
                "type": "array",
                "title": "imageLink",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/ImageLinkType"
                }
              },
              "packagingsignatureline": {
                "type": "array",
                "title": "packagingSignatureLine",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/PackagingSignatureLineType"
                }
              },
              "manufacturinglocation": {
                "title": "manufacturingLocation",
                "$ref": "#/definitions/AddressType"
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            },
            "required": []
          },
          "productquantityinformationmoduletype": {
            "type": "object",
            "title": "ProductQuantityInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "netcontent": {
                "type": "array",
                "title": "netContent",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/MeasurementType"
                }
              },
              "drainedweight": {
                "title": "drainedWeight",
                "$ref": "#/definitions/MeasurementType"
              },
              "percentageofalcoholbyvolume": {
                "title": "percentageOfAlcoholByVolume",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
              },
              "servingquantityinformation": {
                "title": "servingQuantityInformation",
                "$ref": "#/definitions/ServingQuantityInformationType"
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "nonfoodingredientinformationmoduletype": {
            "type": "object",
            "title": "NonfoodIngredientInformationModuleType",
            "additionalProperties": false,
            "properties": {
              "nonfoodingredientstatement": {
                "type": "array",
                "title": "nonfoodIngredientStatement",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/FormattedDescription5000Type"
                }
              },
              "fragrancelevelofdisclosure": {
                "type": "integer",
                "title": "fragranceLevelOfDisclosure",
                "minimum": 1,
                "maximum": 5
              },
              "nonfragrancelevelofdisclosure": {
                "type": "integer",
                "title": "nonfragranceLevelOfDisclosure",
                "minimum": 1,
                "maximum": 3
              },
              "nonfoodingredient": {
                "type": "array",
                "title": "nonfoodIngredient",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "#/definitions/NonfoodIngredientType"
                }
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            }
          },
          "productsustainabilitymoduletype": {
            "type": "object",
            "title": "ProductSustainabilityModuleType",
            "additionalProperties": false,
            "properties": {
              "packagingmaterialabsenceclaims": {
                "type": "array",
                "title": "packagingMaterialAbsenceClaims",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
                }
              },
              "recycledcontentpercentage": {
                "title": "recycledContentPercentage",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
              },
              "recyclablepercentage": {
                "title": "recyclablePercentage",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
              },
              "packagingreusabilityrenewabilitydescription": {
                "type": "array",
                "title": "packagingReusabilityRenewabilityDescription",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
                }
              },
              "effectonenviornment": {
                "type": "array",
                "title": "EffectOnEnviornment",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
                }
              },
              "manufacturingsiteenvironmentalperformance": {
                "type": "array",
                "title": "manufacturingSiteEnvironmentalPerformance",
                "minItems": 0,
                "items": {
                  "title": "$ref",
                  "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
                }
              },
              "packagingpercentagefromrenewablesource": {
                "title": "packagingPercentageFromRenewableSource",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
              },
              "packagingreusabilityindicator": {
                "title": "packagingReusabilityIndicator",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
              },
              "packagingreuserate": {
                "title": "packagingReuseRate",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
              },
              "biodegradabilitypercentage": {
                "title": "biodegradabilityPercentage",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
              },
              "packagingreusabilitystandardcode": {
                "title": "packagingReusabilityStandardCode",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
              },
              "cyclespriortowithdrawl": {
                "title": "cyclesPriorToWithdrawl",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/positiveInteger"
              },
              "avplist": {
                "title": "avpList",
                "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
              }
            },
            "required": []
          }
        }
      },
      "recall": {
        "title": "recall",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
      },
      "recallmessage": {
        "title": "recallMessage",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description175Type"
      },
      "includedproductvariants": {
        "title": "includedProductVariants",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/entityType"
      },
      "productcomponents": {
        "title": "productComponents",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/entityType"
      },
      "informationaccuracyasofdatetime": {
        "title": "informationAccuracyAsOfDateTime",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/dateTime"
      },
      "avplist": {
        "title": "avpList",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
      }
    },
    "definitions": {
      "CountryType": {
        "type": "object",
        "title": "CountryType",
        "additionalProperties": false,
        "properties": {
          "countrycode": {
            "title": "countryCode",
            "$ref": "#/definitions/CountryCodeType"
          },
          "countrysubdivisioncode": {
            "type": "array",
            "title": "countrySubdivisionCode",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/CountrySubdivisionCodeType"
            }
          }
        },
        "required": []
      },
      "CountryCodeType": {
        "title": "CountryCodeType",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
      },
      "CountrySubdivisionCodeType": {
        "title": "CountrySubdivisionCodeType",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
      },
      "NutrientHeaderType": {
        "type": "object",
        "title": "NutrientHeaderType",
        "additionalProperties": false,
        "properties": {
          "preparationstatecode": {
            "title": "preparationStateCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "dailyvalueintakereference": {
            "type": "array",
            "title": "dailyValueIntakeReference",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          },
          "nutrientsetdescription": {
            "type": "array",
            "title": "nutrientSetDescription",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          },
          "servingsizedescription": {
            "type": "array",
            "title": "servingSizeDescription",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          },
          "servingsize": {
            "type": "array",
            "title": "servingSize",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/MeasurementType"
            }
          },
          "nutrientbasisquantity": {
            "type": "array",
            "title": "nutrientBasisQuantity",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/MeasurementType"
            }
          },
          "numberofservings": {
            "title": "numberOfServings",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "nutrientdetail": {
            "type": "array",
            "title": "nutrientDetail",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/NutrientDetailType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      },
      "MeasurementType": {
        "type": "object",
        "title": "MeasurementType",
        "additionalProperties": false,
        "properties": {
          "value": {
            "title": "value",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "measurementunitcode": {
            "title": "measurementUnitCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          }
        },
        "required": []
      },
      "NutrientDetailType": {
        "type": "object",
        "title": "NutrientDetailType",
        "additionalProperties": false,
        "properties": {
          "nutrienttypecode": {
            "title": "nutrientTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "dailyvalueintakepercent": {
            "title": "dailyValueIntakePercent",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "measurementprecision": {
            "title": "measurementPrecision",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "quantitycontained": {
            "type": "array",
            "title": "quantityContained",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/MeasurementType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      },
      "PreparationMethodType": {
        "type": "object",
        "title": "PreparationMethodType",
        "additionalProperties": false,
        "properties": {
          "preparationtypecode": {
            "title": "preparationTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "preparationinstructions": {
            "type": "array",
            "title": "preparationInstructions",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/FormattedDescription2500Type"
            }
          },
          "productyield": {
            "title": "productYield",
            "$ref": "#/definitions/QuantityRangeType"
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        }
      },
      "QuantityRangeType": {
        "type": "object",
        "title": "QuantityRangeType",
        "additionalProperties": false,
        "properties": {
          "maximumquantity": {
            "title": "maximumQuantity",
            "$ref": "#/definitions/QuantityType"
          },
          "minimumquantity": {
            "title": "minimumQuantity",
            "$ref": "#/definitions/QuantityType"
          }
        }
      },
      "QuantityType": {
        "type": "object",
        "title": "QuantityType",
        "additionalProperties": false,
        "properties": {
          "value": {
            "title": "value",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "measurementunitcode": {
            "title": "measurementUnitCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          }
        }
      },
      "AllergenRelatedInformationType": {
        "type": "object",
        "title": "AllergenRelatedInformationType",
        "additionalProperties": false,
        "properties": {
          "allergenstatement": {
            "type": "array",
            "title": "allergenStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/FormattedDescription1000Type"
            }
          },
          "allergenspecificationagency": {
            "title": "allergenSpecificationAgency",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "allergenspecificationname": {
            "title": "allergenSpecificationName",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "allergen": {
            "type": "array",
            "title": "allergen",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/AllergenType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        }
      },
      "AllergenType": {
        "type": "object",
        "title": "AllergenType",
        "additionalProperties": false,
        "properties": {
          "allergentypecode": {
            "title": "allergenTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "levelofcontainmentcode": {
            "title": "levelOfContainmentCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      },
      "ProductUsageAndSafetyType": {
        "type": "object",
        "title": "ProductUsageAndSafetyType",
        "additionalProperties": false,
        "properties": {
          "itemminimumdurability": {
            "title": "itemMinimumDurability",
            "$ref": "#/definitions/TimeMeasurementType"
          },
          "optimumconsumptiontemperaturerange": {
            "title": "optimumConsumptionTemperatureRange",
            "$ref": "#/definitions/TemperatureRangeType"
          },
          "optimumpreparationtemperaturerange": {
            "title": "optimumPreparationTemperatureRange",
            "$ref": "#/definitions/TemperatureRangeType"
          },
          "optimumstoragetemperaturerange": {
            "title": "optimumStorageTemperatureRange",
            "$ref": "#/definitions/TemperatureRangeType"
          },
          "itemperiodsafetouseafteropening": {
            "title": "itemPeriodSafeToUseAfterOpening",
            "$ref": "#/definitions/TimeMeasurementType"
          },
          "safehandlingstatement": {
            "type": "array",
            "title": "safeHandlingStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description5000Type"
            }
          },
          "datemarkstatement": {
            "type": "array",
            "title": "dateMarkStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
            }
          },
          "disclaimerstatement": {
            "type": "array",
            "title": "disclaimerStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
            }
          },
          "warningprecautionstatement": {
            "type": "array",
            "title": "warningPrecautionStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
            }
          },
          "advisorystatement": {
            "type": "array",
            "title": "advisoryStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description1000Type"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        }
      },
      "TimeMeasurementType": {
        "type": "object",
        "title": "TimeMeasurementType",
        "additionalProperties": false,
        "properties": {
          "value": {
            "title": "value",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "timemeasurementunitcode": {
            "title": "timeMeasurementUnitCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          }
        },
        "required": []
      },
      "TemperatureRangeType": {
        "type": "object",
        "title": "TemperatureRangeType",
        "additionalProperties": false,
        "properties": {
          "maximumtemperature": {
            "title": "maximumTemperature",
            "$ref": "#/definitions/TemperatureMeasurementType"
          },
          "minimumtemperature": {
            "title": "minimumTemperature",
            "$ref": "#/definitions/TemperatureMeasurementType"
          }
        }
      },
      "TemperatureMeasurementType": {
        "type": "object",
        "title": "TemperatureMeasurementType",
        "additionalProperties": false,
        "properties": {
          "value": {
            "title": "value",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "temperaturemeasurementunitcode": {
            "title": "temperatureMeasurementUnitCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          }
        },
        "required": []
      },
      "FoodAndBeverageIngredientType": {
        "type": "object",
        "title": "FoodAndBeverageIngredientType",
        "additionalProperties": false,
        "properties": {
          "ingredientname": {
            "type": "array",
            "title": "ingredientName",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          },
          "ingredientdefinition": {
            "type": "array",
            "title": "ingredientDefinition",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
            }
          },
          "ingredientpurpose": {
            "type": "array",
            "title": "ingredientPurpose",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description200Type"
            }
          },
          "ingredientanimalsource": {
            "type": "array",
            "title": "ingredientAnimalSource",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "ingredientgrowingmethod": {
            "type": "array",
            "title": "ingredientGrowingMethod",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "ingredientsequence": {
            "title": "ingredientSequence",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "ingredientcontentpercentage": {
            "title": "ingredientContentPercentage",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "ingredientcountryoforigincode": {
            "type": "array",
            "title": "ingredientCountryOfOriginCode",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "ingredientcatchzone": {
            "type": "array",
            "title": "ingredientCatchZone",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
            }
          },
          "isingredienthighlighted": {
            "title": "isIngredientHighlighted",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
          },
          "subingredient": {
            "type": "array",
            "title": "subIngredient",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/NonfoodIngredientType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      },
      "AccreditationInformationType": {
        "type": "object",
        "title": "AccreditationInformationType",
        "additionalProperties": false,
        "properties": {
          "accreditationcode": {
            "title": "accreditationCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "accreditationtext": {
            "type": "array",
            "title": "accreditationText",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description200Type"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        }
      },
      "RegulatoryComplianceType": {
        "type": "object",
        "title": "RegulatoryComplianceType",
        "additionalProperties": false,
        "properties": {
          "regulatorycompliancecode": {
            "title": "regulatoryComplianceCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "ispackagingmarkedwithregulatorycompliance": {
            "title": "isPackagingMarkedWithRegulatoryCompliance",
            "$ref": "#/definitions/NonBinaryLogicEnumerationType"
          }
        },
        "required": []
      },
      "NonBinaryLogicEnumerationType": {
        "title": "NonBinaryLogicEnumerationType",
        "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
      },
      "ProductActivityDetailsType": {
        "type": "object",
        "title": "ProductActivityDetailsType",
        "additionalProperties": false,
        "properties": {
          "productactivitytypecode": {
            "title": "productActivityTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "activityregiondescription": {
            "type": "array",
            "title": "activityRegionDescription",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description200Type"
            }
          },
          "countryofactivity": {
            "type": "array",
            "title": "countryOfActivity",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/CountryType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      },
      "BrandNameInformationType": {
        "type": "object",
        "title": "BrandNameInformationType",
        "additionalProperties": false,
        "properties": {
          "brandname": {
            "title": "brandName",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "languagespecificbrandname": {
            "type": "array",
            "title": "languageSpecificBrandName",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          }
        },
        "required": []
      },
      "DeclarationStatementType": {
        "type": "object",
        "title": "DeclarationStatementType",
        "additionalProperties": false,
        "properties": {
          "declarationtypecode": {
            "title": "declarationTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "declarationstatement": {
            "type": "array",
            "title": "declarationStatement",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/FormattedDescription2500Type"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        }
      },
      "ProductInformationLinkType": {
        "type": "object",
        "title": "ProductInformationLinkType",
        "additionalProperties": false,
        "properties": {
          "url": {
            "title": "url",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "productinformationtypecode": {
            "title": "productInformationTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "languagecode": {
            "type": "array",
            "title": "languageCode",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": [
          "url"
        ]
      },
      "ImageLinkType": {
        "type": "object",
        "title": "ImageLinkType",
        "additionalProperties": false,
        "properties": {
          "url": {
            "title": "url",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "imagetypecode": {
            "title": "imageTypeCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "languagecode": {
            "type": "array",
            "title": "languageCode",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "imagepixelheight": {
            "title": "imagePixelHeight",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/nonNegativeInteger"
          },
          "imagepixelwidth": {
            "title": "imagePixelWidth",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/nonNegativeInteger"
          },
          "filesize": {
            "title": "fileSize",
            "$ref": "#/definitions/MeasurementType"
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": [
          "url"
        ]
      },
      "PackagingSignatureLineType": {
        "type": "object",
        "title": "PackagingSignatureLineType",
        "additionalProperties": false,
        "properties": {
          "partycontactrolecode": {
            "title": "partyContactRoleCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "partycontactname": {
            "title": "partyContactName",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "partycontactaddress": {
            "title": "partyContactAddress",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "gln": {
            "title": "gln",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "communicationchannel": {
            "type": "array",
            "title": "communicationChannel",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/CommunicationChannelType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      },
      "CommunicationChannelType": {
        "type": "object",
        "title": "CommunicationChannelType",
        "additionalProperties": false,
        "properties": {
          "communicationchannelcode": {
            "title": "communicationChannelCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "communicationvalue": {
            "title": "communicationValue",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "communicationchannelname": {
            "title": "communicationChannelName",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          }
        },
        "required": []
      },
      "AddressType": {
        "type": "object",
        "title": "AddressType",
        "additionalProperties": false,
        "properties": {
          "city": {
            "title": "city",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "citycode": {
            "title": "cityCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "countrycode": {
            "title": "countryCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "countycode": {
            "title": "countyCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "crossstreet": {
            "title": "crossStreet",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "currencyofpartycode": {
            "title": "currencyOfPartyCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "languageofthepartycode": {
            "title": "languageOfThePartyCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "name": {
            "title": "name",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "poboxnumber": {
            "title": "poBoxNumber",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "postalcode": {
            "title": "postalCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "provincecode": {
            "title": "provinceCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "state": {
            "title": "state",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "streetaddressone": {
            "title": "streetAddressOne",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "streetaddresstwo": {
            "title": "streetAddressTwo",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "streetaddressthree": {
            "title": "streetAddressThree",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "geographicalcoordinates": {
            "title": "geographicalCoordinates",
            "$ref": "#/definitions/GeographicalCoordinatesType"
          }
        }
      },
      "GeographicalCoordinatesType": {
        "type": "object",
        "title": "GeographicalCoordinatesType",
        "additionalProperties": false,
        "properties": {
          "latitude": {
            "title": "latitude",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "longitude": {
            "title": "longitude",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          }
        },
        "required": [
          "latitude",
          "longitude"
        ]
      },
      "ServingQuantityInformationType": {
        "type": "object",
        "title": "ServingQuantityInformationType",
        "additionalProperties": false,
        "properties": {
          "numberofservingsperpackage": {
            "title": "numberOfServingsPerPackage",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "measurementprecisioncode": {
            "title": "measurementPrecisionCode",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
          },
          "numberofservingsrangedescription": {
            "type": "array",
            "title": "numberOfServingsRangeDescription",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        }
      },
      "NonfoodIngredientType": {
        "type": "object",
        "title": "NonfoodIngredientType",
        "additionalProperties": false,
        "properties": {
          "ingredientname": {
            "type": "array",
            "title": "ingredientName",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description70Type"
            }
          },
          "ingredientdefinition": {
            "type": "array",
            "title": "ingredientDefinition",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description2500Type"
            }
          },
          "chemicalofconcern": {
            "title": "chemicalOfConcern",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
          },
          "casnumber": {
            "title": "CASNumber",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "isactive": {
            "title": "isActive",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
          },
          "ingredientstrength": {
            "title": "ingredientStrength",
            "$ref": "#/definitions/QuantityType"
          },
          "ingredientstrengthbasis": {
            "title": "ingredientStrengthBasis",
            "$ref": "#/definitions/QuantityType"
          },
          "isgeneric": {
            "title": "isGeneric",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
          },
          "ingredientpurpose": {
            "type": "array",
            "title": "ingredientPurpose",
            "minItems": 1,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/Description200Type"
            }
          },
          "ingredientanimalsource": {
            "type": "array",
            "title": "ingredientAnimalSource",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "ingredientgrowingmethod": {
            "type": "array",
            "title": "ingredientGrowingMethod",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "ingredientsequence": {
            "title": "ingredientSequence",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/string"
          },
          "ingredientcontentpercentage": {
            "title": "ingredientContentPercentage",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/decimal"
          },
          "ingredientcountryoforigincode": {
            "type": "array",
            "title": "ingredientCountryOfOriginCode",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/CodeType"
            }
          },
          "isingredienthighlighted": {
            "title": "isIngredientHighlighted",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/boolean"
          },
          "subingredient": {
            "type": "array",
            "title": "subIngredient",
            "minItems": 0,
            "items": {
              "title": "$ref",
              "$ref": "#/definitions/NonfoodIngredientType"
            }
          },
          "avplist": {
            "title": "avpList",
            "$ref": "https://canada.d.qliktag.com/api/datatype/schema/json#/definitions/AttributeValuePairListType"
          }
        },
        "required": []
      }
    }
  };