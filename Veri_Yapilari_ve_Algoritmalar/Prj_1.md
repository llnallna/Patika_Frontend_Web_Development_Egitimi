
###Proje 1 
**a)** [22,27,16,2,18,6] -> Insertion Sort

+ Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.
+ Big-O gösterimini yazınız.
+ Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
+ Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

<br>

+ 1- Dizinin tamamını soldan sağa tarayarak en küçük sayıyı bulur.(2)
2- En sola 2 yazar --> [2|27,16,22,18,6] (En soldaki sayıyı da sola aldığı sayının indeksine yazar.)
3- Yazdığı sayıyı hariç tutarak soldan sağa tekrar dizinin tamamını tarayarak en küçük 2. sayıyı bulur.(6)
4- 1. indekse en küçük ikinci sayıyı yazar --> [2,6|16,22,18,27]
5- Kalan sıralanmamış 4 sayıyı tarayarak en küçük sayıyı bulur.(16)
6- 16'yı yerinde bırakarak sağından taramaya devam eder --> [2,6,16|22,18,27]
7- Sıralanmamış 3 sayıyı tarayarak en küçük sayıyı bulur.(18)
8- 3. indekse 18 yazar --> [2,6,16,18|22,27]
9- Kalan 2 sıralanmamış sayıyı tarayarak küçük sayıyı bulur(22). 22 ve 27 sıralı olduğu için işlem bu basamakta tamamlanmış olur --> [2,6,16,18,22,27]

<br>

+ Big-O gösterimi: O(n^2)
n+(n-1)+...+1 = (n*(n+1))/2 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = (n^2 + n)/2
Burada domine eden n^2 olduğu için big-O gösterimi O(n^2) olur.
<br>

+ Average case: 16,18
Worst case: 27
Best case: 2
<br>
+ Dizi sıralandıktan sonra 18: Average Case'dir


<br>

**b)** [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

**1** Dizinin tamamını tarar ve en küçük sayıyı belirler. (2)
**2** En sola 2 yazar --> [2|3,5,8,7,9,4,15,6]
**3** 2'nin sağında kalan elemanları tarayarak en küçük sayıyı belirler. (3)
**4** En küçük sayı yerinde kalacağı için --> [2,3|5,8,7,9,4,15,6] diziyi 2. indeksten itibaren tarayarak devam eder.