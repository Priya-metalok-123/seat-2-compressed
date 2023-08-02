
(function () {
  const totalFEColors = 20;
  const totalCHColors = 20;
  const totalWingmatColors = 20;
  const totalBorderColors = 20;
  const totalSeatBackrColors = 20;
  const totalStichesColors = 24;
  const totalPGColors = 10;
  const totalPNColors = 10;
  const totalALColors = 15;
  const totalPTColors = 8;
  const rows = 4;
  const imagesPerRow = 5;
  const alNames = {
    al1: "AL 1045",al2: "AL 1110",al3: "AL 2911",al4: "AL 2930",al5: "AL 2932",
    al6: "AL 2934",al7: "AL 2940",al8: "AL 2957",al9: "AL 2974",al10: "AL 3322",al11: "AL 4097",
    al12: "AL 4996",al13: "AL 6833",al14: "AL 7586",al15: "AL 9002",
  };
   const PTNames = {pt8:"NO PT", pt1:"PT 1",pt2:"PT 2", pt3:"PT 3",pt4:"PT 4", pt5:"PT 5",pt6:"PT 6", pt7:"PT 7",}
  function generateColorOptions(category, totalColors, divId, onClickFunction, includeSeries = true, rows, imagesPerRow) {
    const colorOptionsDiv = document.getElementById(divId);
    if (!colorOptionsDiv) {
      console.error(`Element with id '${divId}' not found.`);
      return;
    }
    colorOptionsDiv.classList.add('color-options-container');
    for (let row = 0; row < rows; row++) {
      const currentRow = document.createElement('div');
      currentRow.classList.add('color-row');
      colorOptionsDiv.appendChild(currentRow);
      for (let col = 0; col < imagesPerRow; col++) {
        const colorIndex = row+col*rows+1;
        if(colorIndex > totalColors)break;
        const div = document.createElement('div');
        div.classList.add('ch-color');
        div.onclick = function(){
          onClickFunction(category, colorIndex);
        };

        const img = document.createElement('img');
        if (category === 'pt') {
          img.src = `./images/color/${category}/pt-${colorIndex}.png`;
        } else {
          img.src = `./images/color/${category}/${category}${includeSeries ? '-' + colorIndex : ''}.png`;
        }
        img.alt = 'color';

        const p = document.createElement('p');
        if (category === 'al') {
          p.textContent = alNames[`al${colorIndex}`];
        } else if (category === 'pt') {
          p.textContent = PTNames[`pt${colorIndex}`];
        } else {
          p.textContent = `${category.toUpperCase()} ${colorIndex}`;
        }
        div.appendChild(img);
        div.appendChild(p);
        currentRow.appendChild(div);
      }
    }
  }

  function onClickCHPattern( colorIndex) {
    console.log("test", colorIndex)
    const patternIndex = colorIndex;
    console.log("c-index", patternIndex)
    const patternMat = seat['PATTERN1MAT'];
    const stitchPatternMat = seat['STITCHPATTERN1MAT'];
    const patternDotsMat = seat['PATTERNDOTS1MAT'];
      const ptName = PTNames[`pt${patternIndex}`];
      console.log("p-name", ptName)

      if (ptName == 'NO PT') {
        console.log("test2", patternMat)
        console.log("test2", stitchPatternMat)
        console.log("test2", config.pattern.noPattern)
        console.log("test2", patternDotsMat)
        changePattern(1, patternMat, stitchPatternMat, patternDotsMat, config.pattern.noPattern, "ch" , 1, 1, 0,0);
      } 
      else {
        const pattern = config.pattern[`pattern${patternIndex}`];
        changePattern(1,patternMat, stitchPatternMat, patternDotsMat,pattern,"ch", 1, 1, 0,0);
      }
     
  }
  
  function onClickFEPattern(category, colorIndex) {
      console.log("test", colorIndex)
     
      const patternIndex = colorIndex;
      console.log("c-index", patternIndex)
      const patternMat = seat['PATTERN1MAT'];
      const stitchPatternMat = seat['STITCHPATTERN1MAT'];
      const patternDotsMat = seat['PATTERNDOTS1MAT'];
        const ptName = PTNames[`pt${patternIndex}`];
        console.log("p-name", ptName)
  
        if (ptName == 'NO PT') {
          console.log("test2", patternMat)
          console.log("test2", stitchPatternMat)
          console.log("test2", config.pattern.noPattern)
          console.log("test2", patternDotsMat)
          changePattern(1, patternMat, stitchPatternMat, patternDotsMat, config.pattern.noPattern, "fe" , 1, 1, 0,0);
        } 
        else {
          const pattern = config.pattern[`pattern${patternIndex}`];
          changePattern(1,patternMat, stitchPatternMat, patternDotsMat,pattern,"fe", 1, 1, 0,0);
        }
       
    }
  
    function onClickALPattern(category, colorIndex) { 
      console.log("test", colorIndex)
     
      const patternIndex = colorIndex;
      console.log("c-index", patternIndex)
      const patternMat = seat['PATTERN1MAT'];
      const stitchPatternMat = seat['STITCHPATTERN1MAT'];
      const patternDotsMat = seat['PATTERNDOTS1MAT'];
        const ptName = PTNames[`pt${patternIndex}`];
        console.log("p-name", ptName)
  
        if (ptName == 'NO PT') {
          console.log("test2", patternMat)
          console.log("test2", stitchPatternMat)
          console.log("test2", config.pattern.noPattern)
          console.log("test2", patternDotsMat)
          changePattern(1, patternMat, stitchPatternMat, patternDotsMat, config.pattern.noPattern, "al" , 1, 1, 0,0);
        } 
        else {
          const pattern = config.pattern[`pattern${patternIndex}`];
          changePattern(1,patternMat, stitchPatternMat, patternDotsMat,pattern,"al", 1, 1, 0,0);
        }
       
    }
  
    function onClickPGPattern(category, colorIndex) {
      console.log("test", colorIndex)
     
      const patternIndex = colorIndex;
      console.log("c-index", patternIndex)
      const patternMat = seat['PATTERN1MAT'];
      const stitchPatternMat = seat['STITCHPATTERN1MAT'];
      const patternDotsMat = seat['PATTERNDOTS1MAT'];
        const ptName = PTNames[`pt${patternIndex}`];
        console.log("p-name", ptName)
  
        if (ptName == 'NO PT') {
          console.log("test2", patternMat)
          console.log("test2", stitchPatternMat)
          console.log("test2", config.pattern.noPattern)
          console.log("test2", patternDotsMat)
          changePattern(1, patternMat, stitchPatternMat, patternDotsMat, config.pattern.noPattern, "na" , 5, 5, 0,0);
        } 
        else {
          const pattern = config.pattern[`pattern${patternIndex}`];
          changePattern(1,patternMat, stitchPatternMat, patternDotsMat,pattern,"na", 1, 1, 0,0);
        }
       
    }
   
  function onClickPATTERN1MAT(category, colorIndex) {
    console.log("onClick-pattern-calling")
    changeBaseColor(seat['PATTERN1MAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickHEADRESTMAT(category, colorIndex) {
    changeBaseColor(seat['HEADRESTMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickWINGMAT(category, colorIndex) {
    changeBaseColor(seat['WINGMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickBORDERSTRIPMAT(category, colorIndex) {
    changeBaseColor(seat['BORDERSTRIPMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickSEATMAT(category, colorIndex) {
    changeBaseColor(seat['SEATMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  
  function onClickSTITCHESMATBODy(category, colorIndex) {
    changeBaseColor(seat['STITCHESMAT'], config.baseColors.stitches[`${category}${colorIndex}`]);
  }
  function onClickSTITCHESMATPAT(category, colorIndex) {
    changePatternStitchesColor( config.baseColors.stitches[`${category}${colorIndex}`]);
  }
  
  
  generateColorOptions('fe', totalFEColors, 'feColorOptions', onClickHEADRESTMAT , true, 4, 5);
  generateColorOptions('ch', totalCHColors, 'chColorOptions', onClickHEADRESTMAT , true, 4, 5);
  generateColorOptions('fe', totalFEColors, 'feColorOptions2', onClickPATTERN1MAT , true, 4, 5);
  generateColorOptions('ch', totalCHColors, 'chColorOptions5', onClickPATTERN1MAT , true,4, 5);
  generateColorOptions('ch', totalWingmatColors, 'wingmatColorOptions', onClickWINGMAT , true, 4, 5);
  generateColorOptions('fe', totalWingmatColors, 'wingmatColorOptions2', onClickWINGMAT , true,4, 5);
  generateColorOptions('ch',totalBorderColors, 'borderColorOptions', onClickBORDERSTRIPMAT , true, 4, 5);
  generateColorOptions('fe', totalBorderColors, 'borderColorOptions2', onClickBORDERSTRIPMAT , true, 4, 5);
  generateColorOptions('ch',totalSeatBackrColors, 'seatbackColorOptions', onClickSEATMAT , true,4, 5);
  generateColorOptions('fe', totalSeatBackrColors, 'seatbackColorOptions2', onClickSEATMAT , true,4, 5);
  generateColorOptions('pg', totalPGColors, 'pgColorOptions',onClickHEADRESTMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'pnColorOptions', onClickHEADRESTMAT,true,4,3);
  generateColorOptions('pg', totalPGColors, 'pgColorOptions2',onClickSEATMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'pnColorOptions2',onClickSEATMAT,true,4,3);
  generateColorOptions('pg', totalPGColors, 'pgColorOptions3',onClickBORDERSTRIPMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'pnColorOptions3',onClickBORDERSTRIPMAT,true,4,3);
  generateColorOptions('pg', totalPGColors, 'pgColorOptions4',onClickWINGMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'pnColorOptions4',onClickWINGMAT,true,4,3);
  generateColorOptions('pg', totalPGColors, 'pgColorOptions5',onClickPATTERN1MAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'pnColorOptions5',onClickPATTERN1MAT,true,4,3);
  generateColorOptions('al', totalALColors, 'alColorOptions', onClickPATTERN1MAT, true, 4, 4);
  generateColorOptions('st', totalStichesColors, 'stitColorOptions',onClickSTITCHESMATBODy, true, 4, 6);
  generateColorOptions('st', totalStichesColors, 'stitColorOptions2',onClickSTITCHESMATPAT, true, 4, 6);
  generateColorOptions('pt', totalPTColors, 'ptchColorOptions', onClickCHPattern, true, 4, 2);
  generateColorOptions('pt', totalPTColors, 'ptfeColorOptions', onClickFEPattern, true, 4, 2);
  generateColorOptions('pt', totalPTColors, 'ptalColorOptions',onClickALPattern, true, 4, 2);
  generateColorOptions('pt', totalPTColors, 'ptpgColorOptions',onClickPGPattern, true, 4, 2);
  generateColorOptions('pt', totalPTColors, 'ptpnColorOptions',onClickPGPattern, true, 4, 2);

})();


