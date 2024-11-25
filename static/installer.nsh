!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "wexium" "Software\Clients\StartMenuInternet\wexium\Capabilities"

  WriteRegStr SHCTX "SOFTWARE\Classes\wexium" "" "wexium HTML Document"
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\Application" "AppUserModelId" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\Application" "ApplicationIcon" "$INSTDIR\wexium.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\Application" "ApplicationName" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\Application" "ApplicationCompany" "wexium"      
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\Application" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\DefaultIcon" "DefaultIcon" "$INSTDIR\wexium.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\wexium\shell\open\command" "" '"$INSTDIR\wexium.exe" "%1"'

  WriteRegStr SHCTX "SOFTWARE\Classes\.htm\OpenWithProgIds" "wexium" ""
  WriteRegStr SHCTX "SOFTWARE\Classes\.html\OpenWithProgIds" "wexium" ""

  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium" "" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\DefaultIcon" "" "$INSTDIR\wexium.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities" "ApplicationName" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities" "ApplicationIcon" "$INSTDIR\wexium.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities\FileAssociations" ".htm" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities\FileAssociations" ".html" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities\URLAssociations" "http" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities\URLAssociations" "https" "wexium"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\Capabilities\StartMenu" "StartMenuInternet" "wexium"
  
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\InstallInfo" "IconsVisible" 1
  
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium\shell\open\command" "" "$INSTDIR\wexium.exe"
!macroend
!macro customUnInstall
  DeleteRegKey SHCTX "SOFTWARE\Classes\wexium"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\wexium"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "wexium"
!macroend