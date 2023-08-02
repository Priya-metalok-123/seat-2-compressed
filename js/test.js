// wing.js ==========================================================================
function showTabWing(tabId){
    // Hide all tab contents
    var wingContents = document.querySelectorAll('.wing-content');
    for (var i = 0; i < wingContents.length; i++) {
      wingContents[i].style.display = 'none';
    }
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.wing');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
    }
// Show the selected tab content
var selectedTabContent = document.getElementById('wingContent' + tabId);
    if (selectedTabContent) {
      selectedTabContent.style.display = 'block';
    }
    // Add active class to the clicked tab
    var clickedTab = document.querySelector('.wing.tab' + tabId);
    if (clickedTab) {
      clickedTab.classList.add('active-tab');
    }

  } 
showTabWing(2);

function showTabBorder(tabId){
  // Hide all tab contents
  var borderContents = document.querySelectorAll('.border-content');
  for (var i = 0; i < borderContents.length; i++) {
    borderContents[i].style.display = 'none';
  }
   // Remove active class from all tabs
   var tabs = document.querySelectorAll('.border-tab');
   for (var i = 0; i < tabs.length; i++) {
     tabs[i].classList.remove('active-tab');
   }
   // Show the selected tab content
var selectedTabContent = document.getElementById('borderContent' + tabId);
if (selectedTabContent) {
  selectedTabContent.style.display = 'block';
}
  // Add active class to the clicked tab
  var clickedTab = document.querySelector('.border-tab.tab' + tabId);
  if (clickedTab) {
    clickedTab.classList.add('active-tab');
  }
}
showTabBorder(2);
// Toggle.js ====================================================================================

    var faq = document.getElementsByClassName("faq-page");
    var i;
    var activeIndex = -1; // Initialize with no active FAQ
    
    for (i = 0; i < faq.length; i++) {
      faq[i].addEventListener("click", function () {
        var currentIndex = Array.prototype.indexOf.call(faq, this);
    
        // If clicked FAQ is already active, close it
        if (currentIndex === activeIndex) {
          this.classList.remove("active");
          this.nextElementSibling.style.display = "none";
          activeIndex = -1;
        }
        // If a different FAQ is active, close it and open the clicked one
        else {
          if (activeIndex !== -1) {
            faq[activeIndex].classList.remove("active");
            faq[activeIndex].nextElementSibling.style.display = "none";
          }
          this.classList.add("active");
          this.nextElementSibling.style.display = "block";
          activeIndex = currentIndex;
        }
      });
    }
// tab.js =========================================================================

    function showTabContent(tabId) {
        // Hide all tab contents
        var tabContents = document.querySelectorAll('.tab-content');
        for (var i = 0; i < tabContents.length; i++) {
          tabContents[i].style.display = 'none';
        }
    
        // Remove active class from all tabs
        var tabs = document.querySelectorAll('.tab');
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('active-tab');
        }
    
        // Show the selected tab content
        var selectedTabContent = document.getElementById('tabContent' + tabId);
        if (selectedTabContent) {
          selectedTabContent.style.display = 'block';
        }
    
        // Add active class to the clicked tab
        var clickedTab = document.querySelector('.tab.tab' + tabId);
        if (clickedTab) {
          clickedTab.classList.add('active-tab');
        }
      } 
      
      function showSubTabContent(tabId, subTabId) {
        // Hide all sub-tab contents under the selected tab
        var subTabContents = document.querySelectorAll('.sub-tab-content');
        for (var i = 0; i < subTabContents.length; i++) {
          subTabContents[i].style.display = 'none';
        }
    
        // Remove active class from all sub-tabs under the selected tab
       
         var subTabs = document.querySelectorAll('.sub-tab');
         for (var i = 0; i < subTabs.length; i++) {
            subTabs[i].classList.remove('active-sub-tab');
         }
    
        // Show the selected sub-tab content
        var selectedSubTabContent = document.getElementById('subTabContent' + tabId + subTabId);
        if (selectedSubTabContent) {
          selectedSubTabContent.style.display = 'block';
        }
    
        // Add active class to the clicked sub-tab
        var clickedSubTab = document.querySelector('.sub-tab.sub-tab'  + subTabId);
        if (clickedSubTab) {
          clickedSubTab.classList.add('active-sub-tab');
        }
        // var clickedTab = document.querySelector('.tab.tab' + tabId);
        // if (clickedTab) {
        //   clickedTab.classList.add('active-tab');
        // }
      }
    
      // Show the default tab on page load (e.g., tab 1)
      showTabContent(2);
    
// scroll.js ========================================================================

$(document).ready(function() {
    // Check window width on page load
    checkWidth();
  
    // Check window width on resize
    $(window).resize(function() {
      checkWidth();
    });
  
    // Function to handle window width changes
    function checkWidth() {
      var windowWidth = $(window).width();
  
      if (windowWidth < 770) {
        // Add class to make mobile div fixed
        $('#mobileDiv').addClass('fixed');
      } else {
        // Remove class to restore default position
        $('#mobileDiv').removeClass('fixed');
      }
    }
  });
  
//  base.js  ==================================================================================

function showTabBase (tabId){
    // Hide all tab contents
    var baseContents = document.querySelectorAll('.base-content');
   for (var i = 0; i < baseContents.length; i++) {
     baseContents[i].style.display = 'none';
   }

   var tabs = document.querySelectorAll('.base');
   for (var i = 0; i < tabs.length; i++) {
     tabs[i].classList.remove('active-tab');
   }
   
   // Show the selected tab content
var selectedTabContent = document.getElementById('baseContent' + tabId);
   if (selectedTabContent) {
     selectedTabContent.style.display = 'block';
   }
   // Add active class to the clicked tab
   var clickedTab = document.querySelector('.base.tab' + tabId);
   if (clickedTab) {
     clickedTab.classList.add('active-tab');
   }
}

showTabBase(2);

// back.js =====================================================================================================

function showTabBack (tabId){
    // Hide all tab contents
    var backContents = document.querySelectorAll('.back-content');
   for (var i = 0; i < backContents.length; i++) {
     backContents[i].style.display = 'none';
   }

   var tabs = document.querySelectorAll('.back');
   for (var i = 0; i < tabs.length; i++) {
     tabs[i].classList.remove('active-tab');
   }
   
   // Show the selected tab content
var selectedTabContent = document.getElementById('backContent' + tabId);
   if (selectedTabContent) {
     selectedTabContent.style.display = 'block';
   }
   // Add active class to the clicked tab
   var clickedTab = document.querySelector('.back.tab' + tabId);
   if (clickedTab) {
     clickedTab.classList.add('active-tab');
   }
}

showTabBack(2);

// stiches.js ===================================================================================================
function showTabStitch(tabId){
    // Hide all tab contents
    var stitchContents = document.querySelectorAll('.stitch-content');
    for (var i = 0; i < stitchContents.length; i++) {
      stitchContents[i].style.display = 'none';
    }
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.stitch');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
    }
// Show the selected tab content
var selectedTabContent = document.getElementById('stitchContent' + tabId);
    if (selectedTabContent) {
      selectedTabContent.style.display = 'block';
    }
    // Add active class to the clicked tab
    var clickedTab = document.querySelector('.stitch.tab' + tabId);
    if (clickedTab) {
      clickedTab.classList.add('active-tab');
    }

  } 
showTabStitch(1);

// seat.js ==============================================================================================
function showTabSeat(tabId){
    // Hide all tab contents
    var seatContents = document.querySelectorAll('.seat-content');
    for (var i = 0; i < seatContents.length; i++) {
      seatContents[i].style.display = 'none';
    }
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.seatt');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
    }
// Show the selected tab content
var selectedTabContent = document.getElementById('seatContent' + tabId);
    if (selectedTabContent) {
      selectedTabContent.style.display = 'block';
    }
    // Add active class to the clicked tab
    var clickedTab = document.querySelector('.seatt.tab' + tabId);
    if (clickedTab) {
      clickedTab.classList.add('active-tab');
    }

  } 
showTabSeat(2);


// ==============================================================
function showSubTabStitch(tabId) {
  // Hide all tab contents
  var substitchContents = document.querySelectorAll('.substitch-content');
  for (var i = 0; i < substitchContents.length; i++) {
    substitchContents[i].style.display = 'none';
  }

  // Remove active class from all tabs
  var tabs = document.querySelectorAll('.stitchsub');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }

  // Show the selected tab content
  var selectedTabContent = document.getElementById('substitchContent' + tabId);
  if (selectedTabContent) {
    selectedTabContent.style.display = 'block';
  }

  // Add active class to the clicked tab
  var clickedTab = document.querySelector('.stitchsub.tab' + tabId);
  if (clickedTab) {
    clickedTab.classList.add('active-tab');
  }
}

// Show the default tab on page load (e.g., tab 1)
showSubTabStitch(1);


 // new subtab-18-07-23
 function showSubTabContentOne(tabId, subTabId) { 
  var subTabContentsOne = document.querySelectorAll('.sub-tab-content-one');
  for (var i = 0; i < subTabContentsOne.length; i++) {
    subTabContentsOne[i].style.display = 'none';  
  } 
  var subTabsOne = document.querySelectorAll('.sub-tab-one');
   for (var i = 0; i < subTabsOne.length; i++) {
    subTabsOne[i].classList.remove('active-sub-tab-one'); 
   } 
  var selectedSubTabContentOne = document.getElementById('subTabContentOne' + tabId + subTabId);
  if (selectedSubTabContentOne) {
    selectedSubTabContentOne.style.display = 'block';
  } 
  var clickedSubTabOne = document.querySelector('.sub-tab-one.subb-tab'  + subTabId);
  if (clickedSubTabOne) {
    clickedSubTabOne.classList.add('active-sub-tab-one');
  } 
} 
showSubTabContentOne(1);


// new added 20-07-23
function showSubTabHeadNappa(tabId, subTabId) { 
  var subTabHeadNappa = document.querySelectorAll('.sub-tab-head-nappa');
  for (var i = 0; i < subTabHeadNappa.length; i++) {
    subTabHeadNappa[i].style.display = 'none';  
  } 

  var subTabsHead = document.querySelectorAll('.head-sub-tab-nappa');
  for (var i = 0; i < subTabsHead.length; i++) {
    subTabsHead[i].classList.remove('active-sub-tab-head-nappa'); 
  } 

  var selectedsubTabHeadNappa = document.getElementById('showSubTabHeadNappa' + tabId + subTabId);
  if (selectedsubTabHeadNappa) {
    selectedsubTabHeadNappa.style.display = 'block';
  } 

  var clickedSubTabHead = document.querySelector('.head-sub-tab-nappa.head-sub-tab' + subTabId);
  if (clickedSubTabHead) {
    clickedSubTabHead.classList.add('active-sub-tab-head-nappa');
  } 
} 

// Call the function with the default active sub-tab
showSubTabHeadNappa(1, 1);

function showSubTabContentTwo(tabId, subTabId) { 
  var subTabContentsTwo = document.querySelectorAll('.sub-tab-content-two');
  for (var i = 0; i < subTabContentsTwo.length; i++) {
    subTabContentsTwo[i].style.display = 'none';  
  } 
  var subTabsTwo = document.querySelectorAll('.sub-tab-two');
   for (var i = 0; i < subTabsTwo.length; i++) {
    subTabsTwo[i].classList.remove('active-sub-tab-two'); 
   } 
  var selectedSubTabContentTwo = document.getElementById('subTabContentTwo' + tabId + subTabId);
  if (selectedSubTabContentTwo) {
    selectedSubTabContentTwo.style.display = 'block';
  } 
  var clickedSubTabTwo = document.querySelector('.sub-tab-two.subbb-tab'  + subTabId);
  if (clickedSubTabTwo) {
    clickedSubTabTwo.classList.add('active-sub-tab-two');
  } 
}  
function showTabSeatBack (tabId){
  var backContents = document.querySelectorAll('.seatbackContent');
   for (var i = 0; i < backContents.length; i++) {
     backContents[i].style.display = 'none';
   }
   var tabs = document.querySelectorAll('.seatback');
   for (var i = 0; i < tabs.length; i++) {
     tabs[i].classList.remove('active-tab');
   }
     // Show the selected tab content
var selectedTabContent = document.getElementById('seatbackContent' + tabId);
if (selectedTabContent) {
  selectedTabContent.style.display = 'block';
}
 // Add active class to the clicked tab
 var clickedTab = document.querySelector('.seatback.tab' + tabId);
 if (clickedTab) {
   clickedTab.classList.add('active-tab');
 }
}

showTabSeatBack (1);


function showTabBorderNappa (tabId){
  var bordernappaContents = document.querySelectorAll('.bordernappacontent');
  for (var i = 0; i < bordernappaContents.length; i++) {
    bordernappaContents[i].style.display = 'none';
  }
  var tabs = document.querySelectorAll('.bordernappa ');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }
       // Show the selected tab content
var selectedTabContent = document.getElementById('bordernappacontent' + tabId);
if (selectedTabContent) {
  selectedTabContent.style.display = 'block';
}
 // Add active class to the clicked tab
 var clickedTab = document.querySelector('.bordernappa.tab' + tabId);
 if (clickedTab) {
   clickedTab.classList.add('active-tab');
 }

}
showTabBorderNappa(1);


function showTabOption(tabId) {
  // Hide all tab contents
  var optionContents = document.querySelectorAll(".option-content");
  for (var i = 0; i < optionContents.length; i++) {
    optionContents[i].style.display = "none";
  }
  // Remove active class from all tabs
  var tabs = document.querySelectorAll(".optiontab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active-tab");
  }
  // Show the selected tab content
  var selectedTabContent = document.getElementById("optionContent" + tabId);
  if (selectedTabContent) {
    selectedTabContent.style.display = "block";
  }
  // Add active class to the clicked tab
  var clickedTab = document.querySelector(".optiontab.tab" + tabId);
  if (clickedTab) {
    clickedTab.classList.add("active-tab");
  }
}
showTabOption(2);










