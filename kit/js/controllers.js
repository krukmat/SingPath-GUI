/* App Controllers */
function IndexCtrl($resource) {	
    statsModel = $resource("../jsonapi/statistics");
    this.stats = statsModel.get();

    currentPlayersModel = $resource("../jsonapi/current_players");
    this.current_players = currentPlayersModel.query();
}

IndexCtrl.$inject = ["$resource"];
                          
function RankingCtrl($resource) {
    countryModel = $resource("../jsonapi/country_ranking");
    this.country_ranking = countryModel.get();
}

RankingCtrl.$inject = ["$resource"];

function YourLevelBadgesCtrl($resource) {	
    yourLevelBadgesModel = $resource("../jsonapi/all_badges");
    this.badges = yourLevelBadgesModel.get();
    this.doFilter = function(elem) {
    	elem.imageURL = elem.imageURL.replace(/^\/static/, "../static");
        if (elem.imageURL && !elem.awarded) {
        	elem.imageURL = elem.imageURL.replace('_on', '_off');
        }
    	var eval_class = (elem.class.indexOf('CountryBadge')<0 && elem.class.indexOf('Level_Badge')<0);
        return (eval_class);
    }
    this.returnClass = function(elem){
    	var url = elem.imageURL.replace(/^\/static/, "../static");
        var clazz = 'earnedBadge';
        if (url && !elem.awarded) {
            clazz = 'notEarnedBadge';
        }
        return clazz;

    }
 }

YourLevelBadgesCtrl.$inject = ["$resource"];

function CountryLevelBadgesCtrl($resource) {	
    countryLevelBadgesModel = $resource("../jsonapi/all_badges");
    this.badges = countryLevelBadgesModel.get();
    this.doFilter = function(elem) { 
    	elem.imageURL = elem.imageURL.replace(/^\/static/, "../static");
        if (elem.imageURL && !elem.awarded) {
        	elem.imageURL = elem.imageURL.replace('_on', '_off');
        }
        var eval_class = elem.class.indexOf('CountryBadge')>0
        return eval_class ;
    }
    this.returnClass = function(elem){
    	var url = elem.imageURL.replace(/^\/static/, "../static");;
        var clazz = 'earnedBadge';
        if (url && !elem.awarded) {
            clazz = 'notEarnedBadge';
        }
        return clazz;

    }
 }

CountryLevelBadgesCtrl.$inject = ["$resource"];

function YourBadgesBoxTop($resource) {	
	yourBadgesBoxTop = $resource("../jsonapi/all_badges");
    this.badges = yourBadgesBoxTop.get();
    this.doFilter = function(elem) {
    	elem.imageURL = elem.imageURL.replace(/^\/static/, "../static");;
        if (elem.imageURL && !elem.awarded) {
        	elem.imageURL = elem.imageURL.replace('_on', '_off');
        }
        var eval_class = elem.class.indexOf('Level_Badge')>0;
        return eval_class;
    }
    this.returnClass = function(elem){
    	var url = elem.imageURL.replace(/^\/static/, "../static");;
        var clazz = 'earnedBadge';
        if (url && !elem.awarded) {
            clazz = 'notEarnedBadge';
        }
        return clazz;
    }
 }

YourBadgesBoxTop.$inject = ["$resource"];


function CountriesCtrl($resource) {	
    allCountriesModel = $resource("../jsonapi/all_countries");
    this.allCountries = allCountriesModel.get();
}

CountriesCtrl.$inject = ["$resource"];