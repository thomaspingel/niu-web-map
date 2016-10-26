// Reference: http://jqueryui.com/autocomplete/ 

  $(function() {

	var availableTags = [
	/* building names */
	{label: "Adams Hall", category : "Buildings"},
	{label: "Altgeld Hall", category : "Buildings"},
	{label: "Anderson Hall", category : "Buildings"},
	{label: "Barsema Alumni & Visitors Center", category : "Buildings"},
	{label: "Barsema Hall", category : "Buildings"},
	{label: "Campus Life", category : "Buildings"},
	{label: "Center for Black Studies", category : "Buildings"},
	{label: "Center for Diversity Resources", category : "Buildings"},
	{label: "Center for the Study of Family Violence and Sexual Assault", category : "Buildings"},
	{label: "Child Care Center", category : "Buildings"},
	{label: "Cole Hall", category : "Buildings"},
	{label: "Convocation Center", category : "Buildings"},
	{label: "Davis Hall", category : "Buildings"},
	{label: "Dorland Building", category : "Buildings"},
	{label: "Douglas Hall", category : "Buildings"},
	{label: "DuSable Hall", category : "Buildings"},
	{label: "East Heating Plant", category : "Buildings"},
	{label: "Engineering Building", category : "Buildings"},
	{label: "Evans Field House", category : "Buildings"},
	{label: "Faraday Hall", category : "Buildings"},
	{label: "Founders Caf�", category : "Buildings"},
	{label: "Founders Memorial Library", category : "Buildings"},
	{label: "Gabel Hall", category : "Buildings"},
	{label: "Gilbert Hall", category : "Buildings"},
	{label: "Graham Hall", category : "Buildings"},
	{label: "Grant Towers North", category : "Buildings"},
	{label: "Grant Towers South", category : "Buildings"},
	{label: "Greenhouse", category : "Buildings"},
	{label: "Health Service Center", category : "Buildings"},
	{label: "Holmes Student Center", category : "Buildings"},
	{label: "Huskie Stadium", category : "Buildings"},
	{label: "La Tourette Hall", category : "Buildings"},
	{label: "Lincoln Hall", category : "Buildings"},
	{label: "Lowden Hall", category : "Buildings"},
	{label: "McMurry Hall", category : "Buildings"},
	{label: "Montgomery Hall", category : "Buildings"},
	{label: "Music Building", category : "Buildings"},
	{label: "Neptune Central", category : "Buildings"},
	{label: "Neptune East", category : "Buildings"},
	{label: "Neptune North", category : "Buildings"},
	{label: "Neptune West", category : "Buildings"},
	{label: "Northern View Community", category : "Buildings"},
	{label: "Parking Garage", category: "Parking"},
	{label: "Physical Plant", category : "Buildings"},
	{label: "Psychology/Computer Science", category : "Buildings"},
	{label: "Public Safety", category : "Buildings"},
	{label: "Reavis Hall", category : "Buildings"},
	{label: "Recreation Center", category : "Buildings"},
	{label: "Software Implementation Center", category : "Buildings"},
	{label: "Speech & Hearing Clinic", category : "Buildings"},
	{label: "Stevens Annex", category : "Buildings"},
	{label: "Stevens Building", category : "Buildings"},
	{label: "Stevenson Towers North", category : "Buildings"},
	{label: "Stevenson Towers South", category : "Buildings"},
	{label: "Still Gym", category : "Buildings"},
	{label: "Still Hall", category : "Buildings"},
	{label: "Swen Parson Hall", category : "Buildings"},
	{label: "Telephone & Security Building", category : "Buildings"},
	{label: "Television Center", category : "Buildings"},
	{label: "University Apartments", category : "Buildings"},
	{label: "Visual Arts Building", category : "Buildings"},
	{label: "Watson Hall", category : "Buildings"},
	{label: "West Heating Plant", category : "Buildings"},
	{label: "Williston Hall", category : "Buildings"},
	{label: "Wirtz Hall", category : "Buildings"},
	{label: "Women�s Resources", category : "Buildings"},
	{label: "Yordon Academic and Athletic Performance Center", category : "Buildings"},
	{label: "Zeke Giorgi Law Clinic", category : "Buildings"},
	{label: "Zulauf Hall", category : "Buildings"},

	/* department names */
	{label: "Accountancy Department", category : "Departments"},
	{label: "Allied Health & Communicative Disorders Department", category : "Departments"},
	{label: "Anthropology Department", category : "Departments"},
	{label: "Art Department", category : "Departments"},
	{label: "Biological Sciences� Department", category : "Departments"},
	{label: "Chemistry and Biochemistry Department", category : "Departments"},
	{label: "Communication Department", category : "Departments"},
	{label: "Computer Science Department", category : "Departments"},
	{label: "Counseling, Adult and Higher Education Department", category : "Departments"},
	{label: "Economics Department", category : "Departments"},
	{label: "Educational Technology, Research and Assessment Department", category : "Departments"},
	{label: "Electrical Engineering Department", category : "Departments"},
	{label: "English Department", category : "Departments"},
	{label: "Environmental Studies Department", category : "Departments"},
	{label: "Family, Consumer and Nutrition Sciences Department", category : "Departments"},
	{label: "Finance Department", category : "Departments"},
	{label: "Foreign Languages and Literatures Department", category : "Departments"},
	{label: "Geography Department", category : "Departments"},
	{label: "Geology and Environmental Geosciences Department", category : "Departments"},
	{label: "History Department", category : "Departments"},
	{label: "Industrial and Systems Engineering Department", category : "Departments"},
	{label: "Kinesiology and Physical Education Department", category : "Departments"},
	{label: "Leadership, Educational Psychology and Foundations Department", category : "Departments"},
	{label: "Literacy Education Department", category : "Departments"},
	{label: "Management Department", category : "Departments"},
	{label: "Marketing Department", category : "Departments"},
	{label: "Mathematical Sciences Department", category : "Departments"},
	{label: "Mechanical Engineering Department", category : "Departments"},
	{label: "Military Science Department", category : "Departments"},
	{label: "Music Department", category : "Departments"},
	{label: "Nursing and Health Studies Department", category : "Departments"},
	{label: "Operations Management and Information Systems Department", category : "Departments"},
	{label: "Philosophy Department", category : "Departments"},
	{label: "Physics Department", category : "Departments"},
	{label: "Political Science Department", category : "Departments"},
	{label: "Psychology Department", category : "Departments"},
	{label: "Public Administration Department", category : "Departments"},
	{label: "Sociology Department", category : "Departments"},
	{label: "Special and Early Education Department", category : "Departments"},
	{label: "Statistics Department", category : "Departments"},
	{label: "Technology Department", category : "Departments"},
	{label: "Theatre and Dance Department", category : "Departments"},

	/*parking types*/
	{label: "Blue Parking", category: "Parking"},
	{label: "Brown Parking", category: "Parking"},
	{label: "Green Parking", category: "Parking"},
	{label: "Orange Parking", category: "Parking"},
	{label: "Purple Parking", category: "Parking"},
	{label: "Yellow Parking", category: "Parking"},
	{label: "Faculty Parking", category: "Parking"},
	{label: "Staff Parking", category: "Parking"},
	{label: "Student Commuter Parking", category: "Parking"},
	{label: "Resident Student Parking", category: "Parking"},
	{label: "DeKalb Resident Parking", category: "Parking"},
	{label: "Remote Parking", category: "Parking"},
	{label: "Motorcycle Parking", category: "Parking"},
	/* parking lots etc*/
	{label: "Parking Garage", category: "Parking"},
	{label: "Event Parking ", category : "Parking"},
	{label: "Event Parking", category: "Parking"},
	{label: "Event Parking C1", category : "Parking"},
	{label: "Event Parking Lot�C2", category : "Parking"},
	{label: "OD Parking Lot", category : "Parking"},
	{label: "Parking Lot 10", category : "Parking"},
	{label: "Parking Lot 11", category : "Parking"},
	{label: "Parking Lot 12", category : "Parking"},
	{label: "Parking Lot 15E", category : "Parking"},
	{label: "Parking Lot 2", category : "Parking"},
	{label: "Parking Lot 20", category : "Parking"},
	{label: "Parking Lot 21 ", category : "Parking"},
	{label: "Parking Lot 23", category : "Parking"},
	{label: "Parking Lot 24", category : "Parking"},
	{label: "Parking Lot 25", category : "Parking"},
	{label: "Parking Lot 26D", category : "Parking"},
	{label: "Parking Lot 26S", category : "Parking"},
	{label: "Parking Lot 26W", category : "Parking"},
	{label: "Parking Lot 27", category : "Parking"},
	{label: "Parking Lot 27D", category : "Parking"},
	{label: "Parking Lot 27S", category : "Parking"},
	{label: "Parking Lot 29 ", category : "Parking"},
	{label: "Parking Lot 29D", category : "Parking"},
	{label: "Parking Lot 30D", category : "Parking"},
	{label: "Parking Lot 31 ", category : "Parking"},
	{label: "Parking Lot 31A", category : "Parking"},
	{label: "Parking Lot 31B", category : "Parking"},
	{label: "Parking Lot 32", category : "Parking"},
	{label: "Parking Lot 35", category : "Parking"},
	{label: "Parking Lot 36", category : "Parking"},
	{label: "Parking Lot 38", category : "Parking"},
	{label: "Parking Lot 39 ", category : "Parking"},
	{label: "Parking Lot 40", category : "Parking"},
	{label: "Parking Lot 43", category : "Parking"},
	{label: "Parking Lot 44", category : "Parking"},
	{label: "Parking Lot 44A", category : "Parking"},
	{label: "Parking Lot 45", category : "Parking"},
	{label: "Parking Lot 48", category : "Parking"},
	{label: "Parking Lot 49", category : "Parking"},
	{label: "Parking Lot 9", category : "Parking"},
	{label: "Parking Lot A", category : "Parking"},
	{label: "Parking Lot B", category : "Parking"},
	{label: "Parking Lot C", category : "Parking"},
	{label: "Parking Lot C3", category : "Parking"},
	{label: "Parking Lot C3 3/4", category : "Parking"},
	{label: "Parking Lot C4 ", category : "Parking"},
	{label: "Parking Lot E", category : "Parking"},
	{label: "Parking Lot H ", category : "Parking"},
	{label: "Parking Lot L", category : "Parking"},
	{label: "Parking Lot M1", category : "Parking"},
	{label: "Parking Lot M12", category : "Parking"},
	{label: "Parking Lot M4", category : "Parking"},
	{label: "Parking Lot M5", category : "Parking"},
	{label: "Parking Lot M6 ", category : "Parking"},
	{label: "Parking Lot NV", category : "Parking"},
	{label: "Parking Lot O ", category : "Parking"},
	{label: "Parking Lot P", category : "Parking"},
	{label: "Parking Lot PS", category : "Parking"},
	{label: "Parking Lot S", category : "Parking"},
	{label: "Parking Lot T", category : "Parking"},
	{label: "Parking Lot V", category : "Parking"},
	{label: "Parking Lot W", category : "Parking"},
	{label: "Parking Lot X", category : "Parking"},
	{label: "Visitor Parking Lot", category : "Parking"},
	
	/* Sports fields*/
	{label: "Huskie Indoor Training Center", category : "Sports"},
	{label: "Outdoor Recreation Sport Complex", category : "Sports"},
	{label: "NIU Track and Field", category : "Sports"},
	{label: "Brigham Field", category : "Sports"},
	{label: "Tennis Courts", category : "Sports"},
	{label: "NIU Soccer Field", category : "Sports"},

	/* offices */
	{label: "Office of Student Engagement and Experiential Learning", category: "Offices"},
	{label: "Financial Aid Office", category: "Offices"},
	{label: "Bursars Office", category: "Offices"},
	{label: "Student Employment Office", category: "Offices"},
	{label: "Admissions Office", category: "Offices"},
	{label: "Undergraduate Admissions Office", category: "Offices"},
	{label: "International Students Office", category: "Offices"},
	{label: "Office of Registration and Records", category: "Offices"},

	/* other */
	{label: "Gabel Pool", category: ""},
	{label: "Law Library", category: ""},
	{label: "Study Abroad", category: ""},
	{label: "Holmes Student Center Hotel", category: ""},
	{label: "University Bookstore", category: ""},
	{label: "Ombudsman", category: ""},
	{label: "East Lagoon", category: ""},
	{label: "Lorusso Lagoon", category: ""},
	{label: "NIU Art Museum", category: ""},
	{label: "Division of Academic and Student Affairs", category: ""}, 
	
	/*Food*/
	{label: "Huskie Den", category: "Food"},
	{label: "Blackhawk Dining Center", category: "Food"},
	{label: "Huskie Hub", category: "Food"},
	{label: "Subway", category: "Food"}
	
	];
	
	
	
	
    $( "#search-box" ).autocomplete({
      source: availableTags
    });
  });

