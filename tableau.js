function initViz() {
    var containerDiv1 = document.getElementById("tableau_percent"),
    url1 = "https://public.tableau.com/views/Abs_percent/AbsoluteandPercentagedata?:language=en&:display_count=y&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv1, url1);    

    var containerDiv2 =  document.getElementById("tableau_gender"),
    url2 = "https://public.tableau.com/views/gender_16050313718790/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv2, url2);

    var containerDiv3 =  document.getElementById("tableau_countries"),
    url3 = "https://public.tableau.com/views/Urban_16076466591170/Story1?:language=en&:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link";
    var viz3 = new tableau.Viz(containerDiv3, url3);

    var containerDiv4 =  document.getElementById("tableau_regions"),
    url4 = "https://public.tableau.com/views/subregions_urban/Story1?:language=en&:display_count=y&:origin=viz_share_link";
    var viz4 = new tableau.Viz(containerDiv4, url4);

    var containerDiv5 =  document.getElementById("tableau_africa_poverty"),
    url5 = "https://public.tableau.com/views/AfricaPopulationBelowPovertylIne/Sheet1?:language=en&:display_count=y&:origin=viz_share_link";
    var viz5 = new tableau.Viz(containerDiv5, url5);

    var containerDiv6 =  document.getElementById("tableau_asia_poverty"),
    url6 = "https://public.tableau.com/views/AsiaPopulationBelowPovertylIne/Sheet1?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link";
    var viz6 = new tableau.Viz(containerDiv6, url6);

    var containerDiv7 =  document.getElementById("tableau_girl_obstacles"),
    url7 = "https://public.tableau.com/views/TopObstaclesGirlsEducation/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz7 = new tableau.Viz(containerDiv7, url7);

    var containerDiv8 =  document.getElementById("tableau_conflict"),
    url8 = "https://public.tableau.com/views/WarTornCountries/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz8 = new tableau.Viz(containerDiv8, url8);
    
}


