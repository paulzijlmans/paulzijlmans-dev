---
title: "Manage Your Java Versions with SDKMAN!"
excerpt: "You can easily install and switch between Java versions using SDKMAN! It allows for setting a default version and switching to a specific version for a particular project."
coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
publishedAt: "2024-07-18"
ogImage:
  url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
---

You can easily install and switch between Java versions using SDKMAN!
It allows for setting a default version and switching to a specific version for a particular project.

#### How to get started
Ok, so how to get started? Well that's easy. Just use the following command in your terminal to install SDKMAN!
```
$ curl -s "https://get.sdkman.io" | bash
```

Afterwards open a new terminal or run the next command in the same shell:
```
$ source "~/.sdkman/bin/sdkman-init.sh"
```

SDKMAN! supports installing versions of Java, Scala, Kotlin, Groovy, Gradle, Maven and Spring Boot.
To install the latest stable Java version use:
```
$ sdk install java
```

You can also list all available candidate versions using:
```
$ sdk list java

================================================================================
Available Java Versions for macOS ARM 64bit
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 Corretto      |     | 22.0.2       | amzn    |            | 22.0.2-amzn
               |     | 22.0.1       | amzn    |            | 22.0.1-amzn
               |     | 21.0.4       | amzn    |            | 21.0.4-amzn
               |     | 21.0.3       | amzn    |            | 21.0.3-amzn
               |     | 17.0.12      | amzn    |            | 17.0.12-amzn
...
```

And install a specific version from the list with for example:
```
$ sdk install java 22.0.2-amzn
```

To use a specific version in the current shell type:
```
$ sdk use java 21.0.3-tem
```

Make it the default version with the following command:
```
$ sdk default java 21.0.3-tem
```

#### Env Command
You can create a config file .sdkmanrc that you can store in your repository:
``` 
$ sdk env init
```

Then every time you work in that repository you can change to the specific version in the config file using:
```
$ sdk env
```

And if you are lazy like me, you can even let the terminal do this automatically for you.

To make this happen set the sdkman_auto_env variable to true in ~/.sdkman/etc/config

The terminal also resets to your default version upon leaving the directory.

#### Upgrade versions
To see what is currently out of date you can use the following command:
```
$ sdk upgrade

  or

$ sdk upgrade java
```

To install the latest version of SKDMAN! use:
```
$ sdk selfupdate
```

Finally, you can refresh the list of candidate versions with:
```
sdk update
```