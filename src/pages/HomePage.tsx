const textPic = [
  "##################################################",
  "#####################KKKKKKKK#####################",
  "#################KKKLffffffffLKKK#################",
  "###############KKffffffffffffffffWK###############",
  "#############KKffffffffffffffffffffKK#############",
  "############KffffffffffffffffffffffffKK###########",
  "##########KL     :fffffffffffffffffffffK##########",
  "#########K        ffffffffffffffffffffffK#########",
  "########K          ffffffffffffffffffffffK########",
  "#######K           fffffffffffffffffffffffK#######",
  "######Kf           ffffffffffffffffffffffffK######",
  "######K           fffffffffffffffffffffffffG######",
  "#####Kf           ffffffffffffffffffffffffffK#####",
  "####Kff          ffffffffffffffffffffffffffffK####",
  "####Kfft        ffffffffffffKKWKWffffffffffffK####",
  "###Kffff      ifffffffffffKGGGGGGGKfffffffffffK###",
  "###KfffffffffffffffffffffGGGGDKEGGGKffffffffffK###",
  "###DffffffffffffffffffffGGGK     KGGKfffffffffL###",
  "##KffffffffffffffffffffKGGK  G ;. KGGKfffffffffK##",
  "##KffffffffffffffLWKKKKGGG :     K KGEfffffffffK##",
  "##KfffffffffGKKGGGGGGGGGGK         fGGWffffffffK##",
  "##KffffffKWGGGGGGGGGGGGGGD        t GGGGDKfffffD##",
  "##ffffKEGGGGGGGGGGGGGGGGGD        j GGGGGGGKKfff##",
  "##fLKGGGGGGGGGGGGGGGGGGGGK         GGGGGGGGGGGKf##",
  "##EEGGGGGGGGGGGGGGGGGGGGGG       K KGGGGGGGGGGGG##",
  "##EEGGGGGGGGGGGEKKK    KGGK  K D  KGGGGGGGGGGGGG##",
  "##EEEGGGGGGKE           GGGK     KGGG.KKGGGGGGGG##",
  "##EEEEEKKt              KGGGGGKDGGGG     ,KGGGGG##",
  "##KEKDtttt               ;GGGGGGGGD          KGG##",
  "##Ktttttttt                KDGGGKW             K##",
  "##Ktttttttt                                    K##",
  "###ttttttttt                                   ###",
  "###Ktttttttt                                  K###",
  "###Kttttttttt                                 K###",
  "####Etttttttti                               G####",
  "####Kttttttttt                               K####",
  "#####Wttttttttt                             W#####",
  "#####Ktttttttttt                           tK#####",
  "######Ktttttttttti                        tK######",
  "#######Kttttttttttt                     itK#######",
  "########Ktttttttttttt                 .ttK########",
  "#########Kttttttttttttt             ttttK#########",
  "##########Kttttttttttttttttt;:,ttttttttK##########",
  "###########KttttttttttttttttttttttttttK###########",
  "############KKttttttttttttttttttttttKK############",
  "##############KKttttttttttttttttttKK##############",
  "################KKWttttttttttttWKK################",
  "###################KKKKKKKKKKKK###################",
  "##################################################",
  "##################################################",
];

export default function HomePage() {
  const picText = textPic.map((val, index) => {
    return (
      <p
        key={index}
        className="text-xs animate-typing-pre font-mono animation-delay-2000 tracking-[0.5rem]"
      >
        {val}
      </p>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mb-5">
        <h1 className="text-5xl font-bold animate-typing">測式開發</h1>
      </div>
      <div>{picText}</div>
    </div>
  );
}
