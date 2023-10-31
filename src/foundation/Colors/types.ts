export type BaseColorTokens =
  | 'liberty'
  | 'lavenderWeb'
  | 'skyBlueCrayola'
  | 'orangeYellow'
  | 'wildStrawberry'
  | 'ultramarineBlue';

export type ColorTokens =
  | BaseColorTokens
  | 'liberty9'
  | 'liberty8'
  | 'liberty7'
  | 'liberty6'
  | 'liberty5'
  | 'liberty4'
  | 'liberty3'
  | 'liberty2'
  | 'liberty1'
  | 'white950'
  | 'white900'
  | 'white800'
  | 'white700'
  | 'white600'
  | 'white500'
  | 'white400'
  | 'white300'
  | 'lavenderWeb1'
  | 'skyBlueCrayola9'
  | 'skyBlueCrayola8'
  | 'skyBlueCrayola7'
  | 'skyBlueCrayola6'
  | 'skyBlueCrayola5'
  | 'skyBlueCrayola4'
  | 'skyBlueCrayola3'
  | 'skyBlueCrayola2'
  | 'skyBlueCrayola1'
  | 'orangeYellow9'
  | 'orangeYellow8'
  | 'orangeYellow7'
  | 'orangeYellow6'
  | 'orangeYellow5'
  | 'orangeYellow4'
  | 'orangeYellow3'
  | 'orangeYellow2'
  | 'orangeYellow1'
  | 'wildStrawberry9'
  | 'wildStrawberry8'
  | 'wildStrawberry7'
  | 'wildStrawberry6'
  | 'wildStrawberry5'
  | 'wildStrawberry4'
  | 'wildStrawberry3'
  | 'wildStrawberry2'
  | 'wildStrawberry1'
  | 'ultramarineBlue9'
  | 'ultramarineBlue8'
  | 'ultramarineBlue7'
  | 'ultramarineBlue6'
  | 'ultramarineBlue5'
  | 'ultramarineBlue4'
  | 'ultramarineBlue3'
  | 'ultramarineBlue2'
  | 'ultramarineBlue1';

export type ColorsTheme = Record<ColorTokens, string>;
