to run locally 
//npx react-native run-android

// to get the apk file 
cd android
./gradlew assembleRelease

PS D:\theschool.ai\frontend> keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
Enter keystore password:  
Re-enter new password: 
What is your first and last name?
  [Unknown]:  kavi
What is the name of your organizational unit?
  [Unknown]:  skool
What is the name of your organization?
  [Unknown]:  skool
What is the name of your City or Locality?
  [Unknown]:  chennai
What is the name of your State or Province?
  [Unknown]:  tamilnadu
What is the two-letter country code for this unit?
  [Unknown]:  IN
Is CN=kavi, OU=skool, O=skool, L=chennai, ST=tamilnadu, C=IN correct?
  [no]:  y

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
        for: CN=kavi, OU=skool, O=skool, L=chennai, ST=tamilnadu, C=IN
[Storing my-upload-key.keystore]
