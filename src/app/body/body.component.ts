import { Component } from '@angular/core';

@Component({
  selector: '<app-body>',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  inputValue : String | undefined;
  paises: { id_pais: number; pais_nome: string; pais_sigla: string }[];
  constructor() {
    this.paises = [
      { id_pais: 1, pais_nome: 'ANDORRA', pais_sigla: 'AND' },
      { id_pais: 2, pais_nome: 'EMIRADOS ARABES UNIDOS', pais_sigla: 'ARE' },
      { id_pais: 3, pais_nome: 'AFEGANISTAO', pais_sigla: 'AFG' },
      { id_pais: 4, pais_nome: 'ANTIGUA E BARBUDA', pais_sigla: 'ATG' },
      { id_pais: 5, pais_nome: 'ANGUILLA', pais_sigla: 'AIA' },
      { id_pais: 6, pais_nome: 'ALBANIA', pais_sigla: 'ALB' },
      { id_pais: 7, pais_nome: 'ARMENIA', pais_sigla: 'ARM' },
      { id_pais: 8, pais_nome: 'ANTILHAS HOLANDESAS', pais_sigla: 'ANT' },
      { id_pais: 9, pais_nome: 'ANGOLA', pais_sigla: 'AGO' },
      { id_pais: 10, pais_nome: 'ANTARCTIDA', pais_sigla: 'ATA' },
      { id_pais: 11, pais_nome: 'ARGENTINA', pais_sigla: 'ARG' },
      { id_pais: 12, pais_nome: 'SAMOA AMERICANA', pais_sigla: 'ASM' },
      { id_pais: 13, pais_nome: 'AUSTRIA', pais_sigla: 'AUT' },
      { id_pais: 14, pais_nome: 'AUSTRALIA', pais_sigla: 'AUS' },
      { id_pais: 15, pais_nome: 'ARUBA', pais_sigla: 'ABW' },
      { id_pais: 16, pais_nome: 'ALAND, ILHAS', pais_sigla: 'ALA' },
      { id_pais: 17, pais_nome: 'AZERBEIJAO', pais_sigla: 'AZE' },
      { id_pais: 18, pais_nome: 'BOSNIA-HERZEGOVINA', pais_sigla: 'BIH' },
      { id_pais: 19, pais_nome: 'BARBADOS', pais_sigla: 'BRB' },
      { id_pais: 20, pais_nome: 'BANGLADESH', pais_sigla: 'BGD' },
      { id_pais: 21, pais_nome: 'BELGICA', pais_sigla: 'BEL' },
      { id_pais: 22, pais_nome: 'BURKINA FASO', pais_sigla: 'BFA' },
      { id_pais: 23, pais_nome: 'BULGARIA', pais_sigla: 'BGR' },
      { id_pais: 24, pais_nome: 'BAHRAIN', pais_sigla: 'BHR' },
      { id_pais: 25, pais_nome: 'BURUNDI', pais_sigla: 'BDI' },
      { id_pais: 26, pais_nome: 'BENIN', pais_sigla: 'BEN' },
      { id_pais: 27, pais_nome: 'BERMUDA', pais_sigla: 'BMU' },
      { id_pais: 28, pais_nome: 'BRUNEI', pais_sigla: 'BRN' },
      { id_pais: 29, pais_nome: 'BOLIVIA', pais_sigla: 'BOL' },
      { id_pais: 30, pais_nome: 'BRASIL', pais_sigla: 'BRA' },
      { id_pais: 31, pais_nome: 'BAHAMAS', pais_sigla: 'BHS' },
      { id_pais: 32, pais_nome: 'BUTAO', pais_sigla: 'BTN' },
      { id_pais: 33, pais_nome: 'BOUVET, ILHA', pais_sigla: 'BVT' },
      { id_pais: 34, pais_nome: 'BOTSWANA', pais_sigla: 'BWA' },
      { id_pais: 35, pais_nome: 'BIELO-RUSSIA', pais_sigla: 'BLR' },
      { id_pais: 36, pais_nome: 'BELIZE', pais_sigla: 'BLZ' },
      { id_pais: 37, pais_nome: 'CANADA', pais_sigla: 'CAN' },
      { id_pais: 38, pais_nome: 'COCOS, ILHAS', pais_sigla: 'CCK' },
      {
        id_pais: 39,
        pais_nome: 'CONGO, REPUBLICA DEMOCRATICA DO (ANTIGO ZAIRE)',
        pais_sigla: 'COD'
      },
      {
        id_pais: 40,
        pais_nome: 'CENTRO-AFRICANA, REPUBLICA',
        pais_sigla: 'CAF'
      },
      { id_pais: 41, pais_nome: 'CONGO, REPUBLICA DO', pais_sigla: 'COG' },
      { id_pais: 42, pais_nome: 'SUICA', pais_sigla: 'CHE' },
      { id_pais: 43, pais_nome: 'COSTA DO MARFIM', pais_sigla: 'CIV' },
      { id_pais: 44, pais_nome: 'COOK, ILHAS', pais_sigla: 'COK' },
      { id_pais: 45, pais_nome: 'CHILE', pais_sigla: 'CHL' },
      { id_pais: 46, pais_nome: 'CAMAROES', pais_sigla: 'CMR' },
      { id_pais: 47, pais_nome: 'CHINA', pais_sigla: 'CHN' },
      { id_pais: 48, pais_nome: 'COLOMBIA', pais_sigla: 'COL' },
      { id_pais: 49, pais_nome: 'COSTA RICA', pais_sigla: 'CRI' },
      { id_pais: 50, pais_nome: 'CUBA', pais_sigla: 'CUB' },
      { id_pais: 51, pais_nome: 'CABO VERDE', pais_sigla: 'CPV' },
      { id_pais: 52, pais_nome: 'CHRISTMAS, ILHA', pais_sigla: 'CXR' },
      { id_pais: 53, pais_nome: 'CHIPRE', pais_sigla: 'CYP' },
      { id_pais: 54, pais_nome: 'CHECA, REPUBLICA', pais_sigla: 'CZE' },
      { id_pais: 55, pais_nome: 'ALEMANHA', pais_sigla: 'DEU' },
      { id_pais: 56, pais_nome: 'DJIBOUTI', pais_sigla: 'DJI' },
      { id_pais: 57, pais_nome: 'DINAMARCA', pais_sigla: 'DNK' },
      { id_pais: 58, pais_nome: 'DOMINICA', pais_sigla: 'DMA' },
      { id_pais: 59, pais_nome: 'DOMINICANA, REPUBLICA', pais_sigla: 'DOM' },
      { id_pais: 60, pais_nome: 'ARGELIA', pais_sigla: 'DZA' },
      { id_pais: 61, pais_nome: 'EQUADOR', pais_sigla: 'ECU' },
      { id_pais: 62, pais_nome: 'ESTONIA', pais_sigla: 'EST' },
      { id_pais: 63, pais_nome: 'EGIPTO', pais_sigla: 'EGY' },
      { id_pais: 64, pais_nome: 'SAARA OCIDENTAL', pais_sigla: 'ESH' },
      { id_pais: 65, pais_nome: 'ERITREIA', pais_sigla: 'ERI' },
      { id_pais: 66, pais_nome: 'ESPANHA', pais_sigla: 'ESP' },
      { id_pais: 67, pais_nome: 'ETIOPIA', pais_sigla: 'ETH' },
      { id_pais: 68, pais_nome: 'FINLANDIA', pais_sigla: 'FIN' },
      { id_pais: 69, pais_nome: 'FIJI', pais_sigla: 'FJI' },
      {
        id_pais: 70,
        pais_nome: 'MALVINAS, ILHAS (FALKLAND)',
        pais_sigla: 'FLK'
      },
      {
        id_pais: 71,
        pais_nome: 'MICRONESIA, ESTADOS FEDERADOS DA',
        pais_sigla: 'FSM'
      },
      { id_pais: 72, pais_nome: 'FAROE, ILHAS', pais_sigla: 'FRO' },
      { id_pais: 73, pais_nome: 'FRANCA', pais_sigla: 'FRA' },
      { id_pais: 74, pais_nome: 'GABAO', pais_sigla: 'GAB' },
      {
        id_pais: 75,
        pais_nome: 'REINO UNIDO DA GRA-BRETANHA E IRLANDA DO NORTE',
        pais_sigla: 'GBR'
      },
      { id_pais: 76, pais_nome: 'GRENADA', pais_sigla: 'GRD' },
      { id_pais: 77, pais_nome: 'GEORGIA', pais_sigla: 'GEO' },
      { id_pais: 78, pais_nome: 'GUIANA FRANCESA', pais_sigla: 'GUF' },
      { id_pais: 79, pais_nome: 'GUERNSEY', pais_sigla: 'GGY' },
      { id_pais: 80, pais_nome: 'GANA', pais_sigla: 'GHA' },
      { id_pais: 81, pais_nome: 'GIBRALTAR', pais_sigla: 'GIB' },
      { id_pais: 82, pais_nome: 'GROELANDIA', pais_sigla: 'GRL' },
      { id_pais: 83, pais_nome: 'GAMBIA', pais_sigla: 'GMB' },
      { id_pais: 84, pais_nome: 'GUINE-CONACRI', pais_sigla: 'GIN' },
      { id_pais: 85, pais_nome: 'GUADELOUPE', pais_sigla: 'GLP' },
      { id_pais: 86, pais_nome: 'GUINE EQUATORIAL', pais_sigla: 'GNQ' },
      { id_pais: 87, pais_nome: 'GRECIA', pais_sigla: 'GRC' },
      {
        id_pais: 88,
        pais_nome: 'GEORGIA DO SUL E SANDWICH DO SUL, ILHAS',
        pais_sigla: 'SGS'
      },
      { id_pais: 89, pais_nome: 'GUATEMALA', pais_sigla: 'GTM' },
      { id_pais: 90, pais_nome: 'GUAM', pais_sigla: 'GUM' },
      { id_pais: 91, pais_nome: 'GUINE-BISSAU', pais_sigla: 'GNB' },
      { id_pais: 92, pais_nome: 'GUIANA', pais_sigla: 'GUY' },
      { id_pais: 93, pais_nome: 'HONG KONG', pais_sigla: 'HKG' },
      {
        id_pais: 94,
        pais_nome: 'HEARD E ILHAS MCDONALD, ILHA',
        pais_sigla: 'HMD'
      },
      { id_pais: 95, pais_nome: 'HONDURAS', pais_sigla: 'HND' },
      { id_pais: 96, pais_nome: 'CROACIA', pais_sigla: 'HRV' },
      { id_pais: 97, pais_nome: 'HAITI', pais_sigla: 'HTI' },
      { id_pais: 98, pais_nome: 'HUNGRIA', pais_sigla: 'HUN' },
      { id_pais: 99, pais_nome: 'INDONESIA', pais_sigla: 'IDN' },
      { id_pais: 100, pais_nome: 'IRLANDA', pais_sigla: 'IRL' },
      { id_pais: 101, pais_nome: 'ISRAEL', pais_sigla: 'ISR' },
      { id_pais: 102, pais_nome: 'MAN, ILHA DE', pais_sigla: 'IMN' },
      { id_pais: 103, pais_nome: 'INDIA', pais_sigla: 'IND' },
      {
        id_pais: 104,
        pais_nome: 'TERRITORIO BRITANICO DO OCEANO INDICO',
        pais_sigla: 'IOT'
      },
      { id_pais: 105, pais_nome: 'IRAQUE', pais_sigla: 'IRQ' },
      { id_pais: 106, pais_nome: 'IRAO', pais_sigla: 'IRN' },
      { id_pais: 107, pais_nome: 'ISLANDIA', pais_sigla: 'ISL' },
      { id_pais: 108, pais_nome: 'ITALIA', pais_sigla: 'ITA' },
      { id_pais: 109, pais_nome: 'JERSEY', pais_sigla: 'JEY' },
      { id_pais: 110, pais_nome: 'JAMAICA', pais_sigla: 'JAM' },
      { id_pais: 111, pais_nome: 'JORDANIA', pais_sigla: 'JOR' },
      { id_pais: 112, pais_nome: 'JAPAO', pais_sigla: 'JPN' },
      { id_pais: 113, pais_nome: 'QUENIA', pais_sigla: 'KEN' },
      { id_pais: 114, pais_nome: 'QUIRGUISTAO', pais_sigla: 'KGZ' },
      { id_pais: 115, pais_nome: 'CAMBODJA', pais_sigla: 'KHM' },
      { id_pais: 116, pais_nome: 'KIRIBATI', pais_sigla: 'KIR' },
      { id_pais: 117, pais_nome: 'COMORES', pais_sigla: 'COM' },
      {
        id_pais: 118,
        pais_nome: 'SAO CRISTOVAO E NEVIS (SAINT KITTS E NEVIS)',
        pais_sigla: 'KNA'
      },
      {
        id_pais: 119,
        pais_nome: 'COREIA, REPUBLICA DEMOCRATICA DA (COREIA DO NORTE)',
        pais_sigla: 'PRK'
      },
      { id_pais: 120, pais_nome: 'COREIA DO SUL', pais_sigla: 'KOR' },
      { id_pais: 121, pais_nome: 'KUWAIT', pais_sigla: 'KWT' },
      { id_pais: 122, pais_nome: 'CAYMAN, ILHAS', pais_sigla: 'CYM' },
      { id_pais: 123, pais_nome: 'CAZAQUISTAO', pais_sigla: 'KAZ' },
      { id_pais: 124, pais_nome: 'LAOS', pais_sigla: 'LAO' },
      { id_pais: 125, pais_nome: 'LIBANO', pais_sigla: 'LBN' },
      { id_pais: 126, pais_nome: 'SANTA LUCIA', pais_sigla: 'LCA' },
      { id_pais: 127, pais_nome: 'LIECHTENSTEIN', pais_sigla: 'LIE' },
      { id_pais: 128, pais_nome: 'SRI LANKA', pais_sigla: 'LKA' },
      { id_pais: 129, pais_nome: 'LIBERIA', pais_sigla: 'LBR' },
      { id_pais: 130, pais_nome: 'LESOTO', pais_sigla: 'LSO' },
      { id_pais: 131, pais_nome: 'LITUANIA', pais_sigla: 'LTU' },
      { id_pais: 132, pais_nome: 'LUXEMBURGO', pais_sigla: 'LUX' },
      { id_pais: 133, pais_nome: 'LETONIA', pais_sigla: 'LVA' },
      { id_pais: 134, pais_nome: 'LIBIA', pais_sigla: 'LBY' },
      { id_pais: 135, pais_nome: 'MARROCOS', pais_sigla: 'MAR' },
      { id_pais: 136, pais_nome: 'MONACO', pais_sigla: 'MCO' },
      { id_pais: 137, pais_nome: 'MOLDAVIA', pais_sigla: 'MDA' },
      { id_pais: 138, pais_nome: 'MONTENEGRO', pais_sigla: 'MNE' },
      { id_pais: 139, pais_nome: 'MADAGASCAR', pais_sigla: 'MDG' },
      { id_pais: 140, pais_nome: 'MARSHALL, ILHAS', pais_sigla: 'MHL' },
      { id_pais: 141, pais_nome: 'MACEDONIA, REPÚBLICA DA', pais_sigla: 'MKD' },
      { id_pais: 142, pais_nome: 'MALI', pais_sigla: 'MLI' },
      {
        id_pais: 143,
        pais_nome: 'MYANMAR (ANTIGA BIRMANIA)',
        pais_sigla: 'MMR'
      },
      { id_pais: 144, pais_nome: 'MONGOLIA', pais_sigla: 'MNG' },
      { id_pais: 145, pais_nome: 'MACAU', pais_sigla: 'MAC' },
      { id_pais: 146, pais_nome: 'MARIANAS SETENTRIONAIS', pais_sigla: 'MNP' },
      { id_pais: 147, pais_nome: 'MARTINICA', pais_sigla: 'MTQ' },
      { id_pais: 148, pais_nome: 'MAURITANIA', pais_sigla: 'MRT' },
      { id_pais: 149, pais_nome: 'MONTSERRAT', pais_sigla: 'MSR' },
      { id_pais: 150, pais_nome: 'MALTA', pais_sigla: 'MLT' },
      { id_pais: 151, pais_nome: 'MAURICIA', pais_sigla: 'MUS' },
      { id_pais: 152, pais_nome: 'MALDIVAS', pais_sigla: 'MDV' },
      { id_pais: 153, pais_nome: 'MALAWI', pais_sigla: 'MWI' },
      { id_pais: 154, pais_nome: 'MEXICO', pais_sigla: 'MEX' },
      { id_pais: 155, pais_nome: 'MALASIA', pais_sigla: 'MYS' },
      { id_pais: 156, pais_nome: 'MOCAMBIQUE', pais_sigla: 'MOZ' },
      { id_pais: 157, pais_nome: 'NAMIBIA', pais_sigla: 'NAM' },
      { id_pais: 158, pais_nome: 'NOVA CALEDONIA', pais_sigla: 'NCL' },
      { id_pais: 159, pais_nome: 'NIGER', pais_sigla: 'NER' },
      { id_pais: 160, pais_nome: 'NORFOLK, ILHA', pais_sigla: 'NFK' },
      { id_pais: 161, pais_nome: 'NIGERIA', pais_sigla: 'NGA' },
      { id_pais: 162, pais_nome: 'NICARAGUA', pais_sigla: 'NIC' },
      { id_pais: 163, pais_nome: 'PAISES BAIXOS (HOLANDA)', pais_sigla: 'NLD' },
      { id_pais: 164, pais_nome: 'NORUEGA', pais_sigla: 'NOR' },
      { id_pais: 165, pais_nome: 'NEPAL', pais_sigla: 'NPL' },
      { id_pais: 166, pais_nome: 'NAURU', pais_sigla: 'NRU' },
      { id_pais: 167, pais_nome: 'NIUE', pais_sigla: 'NIU' },
      {
        id_pais: 168,
        pais_nome: 'NOVA ZELANDIA (AOTEAROA)',
        pais_sigla: 'NZL'
      },
      { id_pais: 169, pais_nome: 'OMAN', pais_sigla: 'OMN' },
      { id_pais: 170, pais_nome: 'PANAMA', pais_sigla: 'PAN' },
      { id_pais: 171, pais_nome: 'PERU', pais_sigla: 'PER' },
      { id_pais: 172, pais_nome: 'POLINESIA FRANCESA', pais_sigla: 'PYF' },
      { id_pais: 173, pais_nome: 'PAPUA-NOVA GUINE', pais_sigla: 'PNG' },
      { id_pais: 174, pais_nome: 'FILIPINAS', pais_sigla: 'PHL' },
      { id_pais: 175, pais_nome: 'PAQUISTAO', pais_sigla: 'PAK' },
      { id_pais: 176, pais_nome: 'POLONIA', pais_sigla: 'POL' },
      {
        id_pais: 177,
        pais_nome: 'SAINT PIERRE ET MIQUELON',
        pais_sigla: 'SPM'
      },
      { id_pais: 178, pais_nome: 'PITCAIRN', pais_sigla: 'PCN' },
      { id_pais: 179, pais_nome: 'PORTO RICO', pais_sigla: 'PRI' },
      { id_pais: 180, pais_nome: 'PALESTINA', pais_sigla: 'PSE' },
      { id_pais: 181, pais_nome: 'PORTUGAL', pais_sigla: 'PRT' },
      { id_pais: 182, pais_nome: 'PALAU', pais_sigla: 'PLW' },
      { id_pais: 183, pais_nome: 'PARAGUAI', pais_sigla: 'PRY' },
      { id_pais: 184, pais_nome: 'QATAR', pais_sigla: 'QAT' },
      { id_pais: 185, pais_nome: 'REUNIAO', pais_sigla: 'REU' },
      { id_pais: 186, pais_nome: 'ROMENIA', pais_sigla: 'ROU' },
      { id_pais: 187, pais_nome: 'SERVIA', pais_sigla: 'SRB' },
      { id_pais: 188, pais_nome: 'RUSSIA', pais_sigla: 'RUS' },
      { id_pais: 189, pais_nome: 'RUANDA', pais_sigla: 'RWA' },
      { id_pais: 190, pais_nome: 'ARABIA SAUDITA', pais_sigla: 'SAU' },
      { id_pais: 191, pais_nome: 'SALOMAO, ILHAS', pais_sigla: 'SLB' },
      { id_pais: 192, pais_nome: 'SEYCHELLES', pais_sigla: 'SYC' },
      { id_pais: 193, pais_nome: 'SUDAO', pais_sigla: 'SDN' },
      { id_pais: 194, pais_nome: 'SUECIA', pais_sigla: 'SWE' },
      { id_pais: 195, pais_nome: 'SINGAPURA', pais_sigla: 'SGP' },
      { id_pais: 196, pais_nome: 'SANTA HELENA', pais_sigla: 'SHN' },
      { id_pais: 197, pais_nome: 'ESLOVENIA', pais_sigla: 'SVN' },
      { id_pais: 198, pais_nome: 'SVALBARD E JAN MAYEN', pais_sigla: 'SJM' },
      { id_pais: 199, pais_nome: 'ESLOVAQUIA', pais_sigla: 'SVK' },
      { id_pais: 200, pais_nome: 'SERRA LEOA', pais_sigla: 'SLE' },
      { id_pais: 201, pais_nome: 'SAN MARINO', pais_sigla: 'SMR' },
      { id_pais: 202, pais_nome: 'SENEGAL', pais_sigla: 'SEN' },
      { id_pais: 203, pais_nome: 'SOMALIA', pais_sigla: 'SOM' },
      { id_pais: 204, pais_nome: 'SURINAME', pais_sigla: 'SUR' },
      { id_pais: 205, pais_nome: 'SAO TOME E PRINCIPE', pais_sigla: 'STP' },
      { id_pais: 206, pais_nome: 'EL SALVADOR', pais_sigla: 'SLV' },
      { id_pais: 207, pais_nome: 'SIRIA', pais_sigla: 'SYR' },
      { id_pais: 208, pais_nome: 'SUAZILANDIA', pais_sigla: 'SWZ' },
      { id_pais: 209, pais_nome: 'TURKS E CAICOS', pais_sigla: 'TCA' },
      { id_pais: 210, pais_nome: 'CHADE', pais_sigla: 'TCD' },
      {
        id_pais: 211,
        pais_nome: 'TERRAS AUSTRAIS E ANTARTICAS FRANCESAS (TAAF)',
        pais_sigla: 'ATF'
      },
      { id_pais: 212, pais_nome: 'TOGO', pais_sigla: 'TGO' },
      { id_pais: 213, pais_nome: 'TAILANDIA', pais_sigla: 'THA' },
      { id_pais: 214, pais_nome: 'TAJIQUISTAO', pais_sigla: 'TJK' },
      { id_pais: 215, pais_nome: 'TOQUELAU', pais_sigla: 'TKL' },
      { id_pais: 216, pais_nome: 'TIMOR-LESTE', pais_sigla: 'TLS' },
      { id_pais: 217, pais_nome: 'TURQUEMENISTAO', pais_sigla: 'TKM' },
      { id_pais: 218, pais_nome: 'TUNISIA', pais_sigla: 'TUN' },
      { id_pais: 219, pais_nome: 'TONGA', pais_sigla: 'TON' },
      { id_pais: 220, pais_nome: 'TURQUIA', pais_sigla: 'TUR' },
      { id_pais: 221, pais_nome: 'TRINDADE E TOBAGO', pais_sigla: 'TTO' },
      { id_pais: 222, pais_nome: 'TUVALU', pais_sigla: 'TUV' },
      { id_pais: 223, pais_nome: 'TAIWAN', pais_sigla: 'TWN' },
      { id_pais: 224, pais_nome: 'TANZANIA', pais_sigla: 'TZA' },
      { id_pais: 225, pais_nome: 'UCRANIA', pais_sigla: 'UKR' },
      { id_pais: 226, pais_nome: 'UGANDA', pais_sigla: 'UGA' },
      {
        id_pais: 227,
        pais_nome: 'MENORES DISTANTES DOS ESTADOS UNIDOS, ILHAS',
        pais_sigla: 'UMI'
      },
      { id_pais: 228, pais_nome: 'URUGUAI', pais_sigla: 'URY' },
      { id_pais: 229, pais_nome: 'USBEQUISTAO', pais_sigla: 'UZB' },
      { id_pais: 230, pais_nome: 'VATICANO', pais_sigla: 'VAT' },
      {
        id_pais: 231,
        pais_nome: 'SAO VICENTE E GRANADINAS',
        pais_sigla: 'VCT'
      },
      { id_pais: 232, pais_nome: 'VENEZUELA', pais_sigla: 'VEN' },
      {
        id_pais: 233,
        pais_nome: 'VIRGENS BRITANICAS, ILHAS',
        pais_sigla: 'VGB'
      },
      {
        id_pais: 234,
        pais_nome: 'VIRGENS AMERICANAS, ILHAS',
        pais_sigla: 'VIR'
      },
      { id_pais: 235, pais_nome: 'VIETNAME', pais_sigla: 'VNM' },
      { id_pais: 236, pais_nome: 'VANUATU', pais_sigla: 'VUT' },
      { id_pais: 237, pais_nome: 'WALLIS E FUTUNA', pais_sigla: 'WLF' },
      { id_pais: 238, pais_nome: 'SAMOA (SAMOA OCIDENTAL)', pais_sigla: 'WSM' },
      { id_pais: 239, pais_nome: 'IEMEN', pais_sigla: 'YEM' },
      { id_pais: 240, pais_nome: 'MAYOTTE', pais_sigla: 'MYT' },
      { id_pais: 241, pais_nome: 'AFRICA DO SUL', pais_sigla: 'ZAF' },
      { id_pais: 242, pais_nome: 'ZAMBIA', pais_sigla: 'ZMB' },
      { id_pais: 243, pais_nome: 'ZIMBABWE', pais_sigla: 'ZWE' }
    ];
  }
  filterTable(event:any, tr:any) {
    var filter, table, tr, td, i, txtValue;    
    filter = event.value.toUpperCase(); 

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
  
  
}
