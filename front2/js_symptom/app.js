	var module = angular.module("symptom",[]);


	module.controller("Ctrl",function($scope,$http){

		//$scope.diseases= "swedfwe";
		$scope.symptoms;
		$scope.diseases;
		$scope.d;
		$scope.all_diseases;

		 $scope.call = function(variable){
			$scope.diseases = variable;
			console.log($scope.diseases);
		}

	    $scope.getsymptom = function() {
	          $http({
	              
	              method: 'GET',    
	              url: 'php_symptom/getsymptom.php'
	              
	          }).then(function (response) {
	     
	              $scope.symptoms = response.data;
	             	//call($scope.symptoms);

	          }, function (response) {
	    
	              console.log(response.data,response.status);
	              
	          });
	    };   
	//$scope.select_state;
	//console.log($scope.symptoms);
	$scope.vari = $scope.getsymptom();

	$scope.variable;
	//$scope.bool = false;
	$scope.select_symptom1 = "none";
	$scope.select_symptom2 = "none";
	$scope.select_symptom3 = "none";
	$scope.select_symptom4 = "none";
	$scope.select_symptom5 = "none";


	$scope.submit = function(){
		$http({
			method : 'POST',
			url : 'php_symptom/recieve_sym2.php',
			data:{
				angular_var1 : $scope.select_symptom1,
				angular_var2 : $scope.select_symptom2,
				angular_var3 : $scope.select_symptom3,
				angular_var4 : $scope.select_symptom4,
				angular_var5 : $scope.select_symptom5
				
			}
		}).then(function(response){
			//$scope.diseases = response.data[0][0];	
			console.log(response);
			$scope.diseases(response.data[0],response.data[1],response.data[2],response.data[3],response.data[4],response.data[5],response.data[6],response.data[7],response.data[8],response.data[9],response.data[10]);
			//return response.data[0][0]; 
		});
	};


	// $scope.success = "alert alert-info";

	//console.log($scope.submit());
	$scope.diseases = function(disease,symptom,severity,commoness,time_to_recover,home_remedies,symptom1,symptom2,symptom3,symptom4,symptom5){
		$scope.d = disease;
		$scope.s = 	symptom;
		$scope.severity = severity;
		if($scope.severity>=0 && $scope.severity<=3)
			$scope.p = "alert alert-success";
		else if($scope.severity>3 && $scope.severity<=5)
			$scope.p = "alert alert-info";
		else if($scope.severity>5 && $scope.severity<=7)
			$scope.p = "alert alert-warning";
		else
			$scope.p = "alert alert-danger";

		$scope.commoness = commoness;

		if($scope.commoness>=0 && $scope.commoness<=3)
			$scope.success2 = "alert alert-success";
		else if($scope.commoness>3 && $scope.commoness<=5)
			$scope.success2 = "alert alert-info";
		else if($scope.commoness>5 && $scope.commoness<=7)
			$scope.success2 = "alert alert-warning";
		else
			$scope.success2 = "alert alert-danger";

		$scope.time_to_recover = time_to_recover;
		$scope.home_remedies = home_remedies;
		$scope.symptom1 = symptom1;
		$scope.symptom2 = symptom2;
		$scope.symptom3 = symptom3;
		$scope.symptom4 = symptom4;
		$scope.symptom5 = symptom5;
	}

	$scope.see1 = function(disease,symptom,severity,commoness,time_to_recover,home_remedies,symptom1,symptom2,symptom3,symptom4,symptom5){
		//console.log(disease);
		//console.log(symptom);

		for (var i = disease.length - 1; i >= 0; i--) {
			if(disease[i]==$scope.select_disease)
				break;
		};

		//console.log(i);
		console.log(disease[i]);
		$scope.x1 = disease[i];
		$scope.s1 = 	symptom[i];
		$scope.severity1 = severity[i];
		$scope.commoness1 = commoness[i];
		$scope.time_to_recover1 = time_to_recover[i];
		$scope.home_remedies1 = home_remedies[i];
		$scope.symptom11 = symptom1[i];
		$scope.symptom21 = symptom2[i];
		$scope.symptom31 = symptom3[i];
		$scope.symptom41 = symptom4[i];
		$scope.symptom51 = symptom5[i];
	}

	$scope.get_all_diseases = function() {
	          $http({
	              
	              method: 'GET',    
	              url: 'php_symptom/get_disease.php'
	              
	          }).then(function (response) {
	     
	              $scope.list_diseases = response.data[0];
	              //console.log(response.data);
	              $scope.see1(response.data[0],response.data[1],response.data[2],response.data[3],response.data[4],response.data[5],response.data[6],response.data[7],response.data[8],response.data[9],response.data[10]);

	          }, function (response) {
	    
	              console.log(response.data,response.status);
	              
	          });

	          
	    };

	$scope.get_all_diseases();

	$scope.know_disease = function(i){
		console.log($scope.d[i]);

		$http({
			method : 'POST',
			url : 'php_login/3.php',
			data:{
				angular_var1 : $scope.d[i],
			}
		}).then(function(response){
			//$scope.diseases = response.data[0][0];	
			console.log(response);
			//$scope.diseases(response.data[0],response.data[1],response.data[2],response.data[3],response.data[4],response.data[5],response.data[6],response.data[7],response.data[8],response.data[9],response.data[10]);
			//return response.data[0][0]; 
		});

	}


	//proxyurl = "https://cors-anywhere.herokuapp.com/";
	$scope.get_all_diseases1 = function() {
	          $http({
	              
	              method: 'GET',    
	              dataType: "jsonp",

	              url: 'https://cors-anywhere.herokuapp.com/https://www.wikihow.com/Store-Apples'
	              
	          }).then(function (response) {
	     
	              console.log(response.data);
	              //var challenges = $(response.data).find('div');
	              //console.log(challenges);
	              // var points = $(response.data).find(/<h1 class="flat-top text-primary">\[ ([\d]*?) \]<\/h1>/);
	              // console.log(points);
	              //var res = response.data.substring(1, 4);
	              
	              var c = new RegExp("</sup>" + "(.*)" + "<script>");
	              var str = response.data.match(c);

	        	  var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>"
	        	    , parser = new DOMParser()
	        	    , doc = parser.parseFromString(str, "text/xml");
	        	  console.log(doc.firstChild); 
	        	   console.log(doc.firstChild.firstChild.firstChild); // => <div id="foo">...
	        	  //doc.firstChild.firstChild;

	        	  //var xml = XElement.Parse(xmlString);
	        	  //var flights = xml.DescendantsAndSelf("div");
	        	  //string.Concat(flights.Nodes());
	        	  //console.log(flights);

	        	  //XDocument doc = XDocument.Load(xmlString);
	        	  //string flightDetails= doc.Descendants("div").SingleOrDefault().ToString();
	        	  //console.log(flightDetails);

	        	  var x = xmlString.getElementById("foo");
	        	  console.log(x); 
	              //console.log(c);	
	              // $scope.res = response.data.match(c);
	              // while($scope.res){
	              	
	              // 	 console.log($scope.res);
	              // 	 c = $scope.res;
	              // 	  $scope.res = response.data.match(c);
	              // }
	    		  
	              //$scope.res = response.data.match(c);
	              //var number=document.getElementById("number").value;	
	              //$('div').html();
	              console.log($scope.res);
	              //console.log($scope.res[2]);
	              //console.log(res[1]);
	              //console.log(res[2]);

	          }, function (response) {
	    
	              console.log(response.data,response.status);
	              
	          });

	          
	    };


	    $scope.get_all_diseases1();

	//console.log($scope.select_disease); 
});

