# Plaid - Wyre widget implementation in React-Native

## Setup

### Clone repo

- clone the repo
  git clone http://
- install dependencies
  npm install | yarn install

### build package

npm run android

### fix problem

2 problems should appear

#### SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at '.....\android\local.properties'.

add a file named local.properties in ./android/ with the path to the Sdk folder. ej:
sdk.dir=C:\\Users\\username\\AppData\\Local\\Android\\Sdk

#### compileSdkVersion is not specified. Please add it to build.gradle

In android/app/build.gradle define the compileSdkVersion. ej:
compileSdkVersion 31

### build package again

npm run android

#### Possible error

if Native Module PlaidAndroid error appears in the builded app:

In the MainApplication.java file deletethe lines

- import com.plaid.PlaidPackage;
- packages.add(new PlaidPackage());

#### Possible error 2

If BuildConfig error appears during build:

- Make sure your java package names are correct (MainApplication.java etc.)
- update the package name in the gradle build file
- update the package name in the manifest file
- update the package name in the BUCK file
- make sure the path to you javascript sources is a folder structure that matches your package name
