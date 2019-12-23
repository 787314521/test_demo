		var typeSelect=0;
		var selectPart=document.getElementById("selectPart");
        var liOptions=document.getElementsByTagName("option");
        selectPart.onchange=function(){
//      	console.log(liOptions[selectPart.selectedIndex]);
//      	alert(selectPart.selectedIndex);
            typeSelect=selectPart.selectedIndex;
            mathResult();
        }
        
		var resetVal=document.getElementById("reset");
		var resultVal=document.getElementById("result");//计算 按钮;
		var reference=document.getElementById("referencePart");
		var result=document.getElementById("resultInput");
		var money=document.getElementById("moneyPart");
		
		/*----- ↓ 计算bottom  -----*/
		resultVal.onclick=function(){
			//calCulate("=");
			reference.style.fontSize=15+'px';
			money.style.display="inline-block";
			result.style.fontSize=40+'px';
			mathResult();
		};
		
		/*----- ↓ 重置  -----*/
		resetVal.onclick=function(){
			calCulate("C");
			result.innerHTML="";
		};
		
		function calCulate(val){
			var num = document.getElementById("inputAmount");
			switch(val){
				case "=":
				num.value = eval(num.value);
				
				break;
				
				case "C":
				num.value = "";
				break;
				
				default:
				  num.value =num.value+val;
				break;
			}	
		}
		function mathResult(){
			var biaoDiE=document.getElementById("inputAmount");
			var result=document.getElementById("resultInput");
			var check=document.getElementById("belong");
			console.log(check.checked);
			// ↓ if(typeSelect.selectedIndex==xx)
			if(typeSelect==0){
				console.log("财产案件");
				
				if(biaoDiE.value == ""){
                    result.innerHTML = "0.00";
                }else if(biaoDiE.value <= 10000  && check.checked==true){
                	result.innerHTML= "25";
                }else if(biaoDiE.value <= 10000  && check.checked==false){
                	result.innerHTML = "50";
                }else if(biaoDiE.value > 10000 && biaoDiE.value <= 100000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.025 - 200) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 10000 && biaoDiE.value <= 100000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.025 - 200);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 100000 && biaoDiE.value <= 200000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.02 + 300) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 100000 && biaoDiE.value <= 200000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.02 + 300);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 200000 && biaoDiE.value <= 500000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.015 + 1350) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 200000 && biaoDiE.value <= 500000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.015 + 1350);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 500000 && biaoDiE.value <= 1000000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.01 + 3800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 500000 && biaoDiE.value <= 1000000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.01 + 3800);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 1000000 && biaoDiE.value <= 2000000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.009 + 4800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 1000000 && biaoDiE.value <= 2000000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.009 + 4800);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 2000000 && biaoDiE.value <= 5000000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.008 + 6800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 2000000 && biaoDiE.value <= 5000000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.008 + 6800);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 5000000 && biaoDiE.value <= 10000000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.007 + 11800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 5000000 && biaoDiE.value <= 10000000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.007 + 11800);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 10000000 && biaoDiE.value <= 20000000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.006 + 21800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 10000000 && biaoDiE.value <= 20000000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.006 + 21800);
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 20000000 && check.checked==true){
                	var resultSum = (biaoDiE.value * 0.005 + 41800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
                }else if(biaoDiE.value > 20000000 && check.checked==false){
                	var resultSum = (biaoDiE.value * 0.005 + 41800);
                    result.innerHTML = resultSum.toFixed(2);
                }
            // ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==1){
				console.log("普通非财产案件");
				
				if (biaoDiE.value == ""){
                    result.innerHTML = "0.00";
               	}else if(biaoDiE.value > 0 && check.checked==true){
               		result.innerHTML = "25-50";
               	}else if(biaoDiE.value > 0 && check.checked==false){
               		result.innerHTML = "50-100";
               	}
				        
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==2){
				console.log("离婚案件");
				
				if (biaoDiE.value == "" && check.checked==true){
                    result.innerHTML = "25-150";
               	}else if(biaoDiE.value == "" && check.checked==false){
               		result.innerHTML = "50-300";
               	}else if(biaoDiE.value <= 200000 && check.checked==true){
               		result.innerHTML = "25-150";
               	}else if(biaoDiE.value <= 200000 && check.checked==false){
               		result.innerHTML = "50-300";
               	}else if(biaoDiE.value > 200000 && check.checked==true){
               		var resultSum = ((biaoDiE.value - 200000) * 0.005)/2;
               		var resultSumMin=resultSum+25;
               		var resultSumMax=resultSum+150;
                    result.innerHTML = resultSumMin+"-"+resultSumMax;
               	}else if(biaoDiE.value > 200000 && check.checked==false){
               		var resultSum = ((biaoDiE.value - 200000) * 0.005);
               		var resultSumMin=resultSum+50;
               		var resultSumMax=resultSum+300;
                    result.innerHTML = resultSumMin+"-"+resultSumMax;
               	}
               	
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==3){
				console.log("人格权案件");
				if(biaoDiE.value == "" && check.checked==true){
                    result.innerHTML = "50-250";
               	}else if(biaoDiE.value == "" && check.checked==false){
               		result.innerHTML = "100-500";
               	}else if(biaoDiE.value <= 50000 && check.checked==true){
               		result.innerHTML = "50-250";
               	}else if(biaoDiE.value <= 50000 && check.checked==false){
               		result.innerHTML = "100-500";
               	}else if(biaoDiE.value > 50000 && biaoDiE.value <= 100000 && check.checked==true){
               		var resultSum = ((biaoDiE.value - 50000) * 0.01)/2;
               		var resultSumMin=resultSum+50;
               		var resultSumMax=resultSum+250;
                    result.innerHTML = resultSumMin+"-"+resultSumMax;
               		
               	}else if(biaoDiE.value > 50000 && biaoDiE.value <= 100000 && check.checked==false){
               		var resultSum = ((biaoDiE.value - 50000) * 0.01);
               		var resultSumMin=resultSum+100;
               		var resultSumMax=resultSum+500;
                    result.innerHTML = resultSumMin+"-"+resultSumMax;
               	}else if( biaoDiE.value > 100000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.005)/2;
               		var resultSumMin=resultSum+50;
               		var resultSumMax=resultSum+250;
                    result.innerHTML = resultSumMin+"-"+resultSumMax;
               	}else if( biaoDiE.value > 100000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.005);
               		var resultSumMin=resultSum+100;
               		var resultSumMax=resultSum+500;
                    result.innerHTML = resultSumMin+"-"+resultSumMax;
               	}
				
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==4){
				console.log("知识产权案件");//涉及财产，放在这里
				
				if(biaoDiE.value == ""){
                    result.innerHTML = "0.00";
               	}else if(biaoDiE.value>0 && check.checked==true){
               		result.innerHTML = "250-500";
               	}else if(biaoDiE.value>0 && check.checked==false){
               		result.innerHTML = "500-1000";
               	}else if(biaoDiE.value <= 10000 && check.checked==true){
               		result.innerHTML = "25";
               	}else if(biaoDiE.value <= 10000 && check.checked==false){
               		result.innerHTML = "50";
               	}else if(biaoDiE.value > 10000 && biaoDiE.value <= 100000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.025 - 200) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 10000 && biaoDiE.value <= 100000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.025 - 200);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 100000 && biaoDiE.value <= 200000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.02 + 300) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 100000 && biaoDiE.value <= 200000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.02 + 300);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 200000 && biaoDiE.value <= 500000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.015 + 1350) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 200000 && biaoDiE.value <= 500000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.015 + 1350);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 500000 && biaoDiE.value <= 1000000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.01 + 3800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 500000 && biaoDiE.value <= 1000000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.01 + 3800);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 1000000 && biaoDiE.value <= 2000000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.009 + 4800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 1000000 && biaoDiE.value <= 2000000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.009 + 4800);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 2000000 && biaoDiE.value <= 5000000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.008 + 6800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 2000000 && biaoDiE.value <= 5000000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.008 + 6800);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 5000000 && biaoDiE.value <= 10000000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.007 + 11800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 5000000 && biaoDiE.value <= 10000000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.007 + 11800);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 10000000 && biaoDiE.value <= 20000000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.006 + 21800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 10000000 && biaoDiE.value <= 20000000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.006 + 21800);
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 20000000 && check.checked==true){
               		var resultSum = (biaoDiE.value * 0.005 + 41800) / 2;
                    result.innerHTML = resultSum.toFixed(2);
               	}else if(biaoDiE.value > 20000000 && check.checked==false){
               		var resultSum = (biaoDiE.value * 0.005 + 41800);
                    result.innerHTML = resultSum.toFixed(2);    
               	}
				
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==5){
				console.log("劳动争议案件");
				
				if(biaoDiE.value == ""){
                    result.innerHTML = "0.00";
               	}else if(biaoDiE.value>0 && check.checked==true){
               		result.innerHTML = "5";
               	}else if(biaoDiE.value>0 && check.checked==false){
               		result.innerHTML = "10";
               	}
				
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==6){
				console.log("行政案件");
				
				if(biaoDiE.value == ""){
                    result.innerHTML = "0.00";
               	}else if(biaoDiE.value>0 && check.checked==true){
               		result.innerHTML = "25";
               	}else if(biaoDiE.value>0 && check.checked==false){
               		result.innerHTML = "50";
               	}
				
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==7){
				console.log("商标、专利、海事行政案件");
				if(biaoDiE.value == ""){
                    result.innerHTML = "0.00";
               	}else if(biaoDiE.value>0 && check.checked==true){
               		result.innerHTML = "50";
               	}else if(biaoDiE.value>0 && check.checked==false){
               		result.innerHTML = "100";
               	}
			// ↓  }else if(typeSelect.selectedIndex==xx){
			}else if(typeSelect==8){
				console.log("管辖权异议不成立案件");
				if(biaoDiE.value == ""){
                    result.innerHTML = "0.00";
               	}else if(biaoDiE.value>0 && check.checked==true){
               		result.innerHTML = "25-50";
               	}else if(biaoDiE.value>0 && check.checked==false){
               		result.innerHTML = "50-100";
               	}
			}
		}