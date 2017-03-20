'run the application for multiple times with out any operation required

For i=1 to 5


SystemUtil.Run "C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe","","C:\Program Files\HP\QuickTest Professional\samples\flight\app\","open"
Dialog("Login").WinEdit("Agent Name:").Set "divya" @@ hightlight id_;_2229062_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "587ba9c87221f40daf4d40ef38de65711efd3e16" @@ hightlight id_;_1966982_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_2491124_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type "121217" @@ hightlight id_;_2491252_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Denver" @@ hightlight id_;_2294746_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Los Angeles" @@ hightlight id_;_2032444_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_2556660_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Activate "5988   DEN   01:45 PM   LAX   02:42 PM   AA     $123.60" @@ hightlight id_;_2360242_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "divya" @@ hightlight id_;_2032518_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").SetSelection 0,1 @@ hightlight id_;_2622226_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Set "2" @@ hightlight id_;_2622226_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_2163582_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Flight Reservation").Close
next 
