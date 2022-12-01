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

## install sumsub SDK

yarn add @sumsub/react-native-mobilesdk-module

### fix problems

#### :app:mergeDebugJavaResource

> A failure occurred while executing com.android.build.gradle.internal.tasks.MergeJavaResWorkAction
> 2 files found with path 'org/bouncycastle/x509/CertPathReviewerMessages_de.properties' from inputs:

      - C:\Users\...\.gradle\caches\transforms-3\702be7c9acef11ca9243c0021f75dc76\transformed\jetified-bcprov-jdk15to18-1.69.jar
      - C:\Users\...\.gradle\caches\transforms-3\57ef2bc223db4c821efada5fdafa303c\transformed\jetified-bcprov-jdk18on-1.71.jar

##### Solucion

Agregar en android/app/build.gradle agregar dentro de android

android {
//
configurations {
all*.exclude module: 'bcprov-jdk15to18'
all*.exclude module: 'bcprov-jdk18on'
}
//
}

#### app:checkDebugDuplicateClasses

##### Solucion

Agregar en android/app/build.gradle agregar dentro de android

dependencies {
//
implementation (project(':sumsub_react-native-mobilesdk-module')) {
exclude group: "org.bouncycastle", module: "bcutil-jdk15to18"
exclude group: "org.bouncycastle", module: "bcutil-jdk18on"
}
//
}
