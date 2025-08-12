
--- 
date: 2025-08-13

title: Ubuntu LINUX 安裝
---

### 下載好前的指令我做了：

啟用你電腦的 Linux 開發環境

點擊你畫面右下角的時間，然後點擊跳出來的選單中的齒輪圖示，進入「設定」。

在設定頁面的左邊，找到並點擊「關於ChromeOS」，然後在下方找到「 Linux 開發環境」。

請點擊它旁邊的「啟用」按鈕。

接下來系統會跳出一個設定精靈，通常會請你設定一個「使用者名稱」，並決定要分配多少硬碟空間給 Linux（用預設值通常就可以了）。按下「安裝」。

系統會下載並安裝。

建立指定的 Ubuntu 環境

現在已經有了基礎的Debian 環境，但要求的是 Ubuntu。所以我們要在這個基礎上，建立一個新的、獨立的 Ubuntu 環境。

打開 crosh 管理介面

在鍵盤上同時按下 Ctrl + Alt + T。

這會打開一個黑底白字的 crosh> 視窗。

進入虛擬機管理層

在 crosh> 視窗中，輸入vsh termina後按 Enter。

成功後，提示符號會變成 (termina) ... $。

建立全新的 Ubuntu 容器 (如果還沒建立過)

在 (termina) ... $ 畫面下，輸入lxc launch ubuntu:22.04 ubuntu-lts後按 Enter。

如果之前已經成功執行過而出現「already exists」的錯誤，可以直接跳過這一步。

啟動你的 Ubuntu 容器 (每次要用之前，都建議執行一次)

在 (termina) ... $ 畫面下，輸入lxc start ubuntu-lts後按 Enter。

這個指令可以確保你的 Ubuntu 環境是「已開機」的狀態。如果它本來就在運作，系統會直接告訴你。

正式進入你的 Ubuntu 環境

在 (termina) ... $ 畫面下，輸入lxc exec ubuntu-lts -- /bin/bash後按 Enter。

成功後，提示符號會變成 root@ubuntu-lts:~#。

### 下載好後的指令我做了：

Ctrl+Alt+T 打開 crosh

crosh (Chrome Shell) 是 Chrome OS 的一個指令行介面，但它的功能有限，主要用來做一些基本的診斷。

vsh termina

這是關鍵的一步。啟動了一個虛擬機 shell (vsh)，進入到一個名為 termina 的虛擬機 (Virtual Machine) 裡面。termina 是 Chrome OS 為了運行 Linux 環境而特別打造的輕量級虛擬
機。

lxc start ubuntu-lts

在 termina 虛擬機裡面，使用 lxc 這個工具，啟動了一個叫做 ubuntu-lts 的容器 (Container)。

lxc exec ubuntu-lts -- /bin/bash

最後，進入了 ubuntu-lts 這個容器的內部，並啟動了 bash (一個標準的 Linux shell)。所有的後續操作，都是在這個 Ubuntu 容器裡進行的。

真實環境架構

環境是一個像多層結構，從外到內分別是：

Chrome OS (主機系統)

Termina (虛擬機)

LXC (容器技術)

Ubuntu LTS (容器本身，操作空間)
帳號 (一般使用者)
