val scala3Version = "3.2.2"

lazy val root = project
  .in(file("."))
  .enablePlugins(ScalaJSPlugin, ScalablyTypedConverterExternalNpmPlugin)
  .settings(
      name := "vite-demo",
      version := "0.1.0-SNAPSHOT",
      scalaVersion := scala3Version,
      scalaJSLinkerConfig ~= {
        _.withModuleKind(ModuleKind.ESModule)
      },
      externalNpm := baseDirectory.value,
      libraryDependencies += "org.scalameta" %% "munit" % "1.0.0-M7" % Test
  )
