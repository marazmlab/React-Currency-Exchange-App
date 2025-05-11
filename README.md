> ⭐ **\*README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!\***
>
> 🎁 _Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**._

&nbsp;

# Portfel walutowy

Zbuduj aplikację, która będzie obliczać potencjalny zysk lub stratę z posiadanych walut.

Użytkownik ma mieć możliwość wprowadzenia poniższych informacji:

- rodzaj posiadanej waluty
- jej ilość
- data zakupu
- cena zakupu (ten element można zautomatyzować – kiedy zostanie wybrana data, to cena uzupełni się automatycznie przy pomocy API. Oczywiście użytkownik będzie mógł tę cenę zmodyfikować).

Zapisuj te informacje w [localStorage](https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/) jako tablicę przechowującą obiekty. Po uruchomieniu strony zawsze sprawdzaj, czy w LS są już przechowywane jakieś dane. Jeśli tak, wczytuj je do widoku aplikacji.

Następnie przy pomocy [API](https://exchangeratesapi.io/) pobieraj aktualne kursy walut użytkownika i przypisuj odpowiednią wartość do każdego elementu w tablicy.

// Noted: Avoid using Axios for further work. Instead, use the Fetch API for HTTP requests.

> **Uwaga:** w tym projekcie możesz napotkać ostrzeżenia lub błędy związane z _mixed content_, ponieważ darmowa wersja exchangeratesapi.io oferuje jedynie niezabezpieczone połączenie (HTTP). Mixed content występuje, gdy żądanie nie jest zabezpieczone przez protokół HTTPS (czego wymaga polityka bezpieczeństwa przeglądarek), czyli ładowana jest zawartość HTTP, np. grafiki, skrypty, style itp. Aby umożliwić ładowanie zawartości HTTP, należy [zmienić ustawienia przeglądarki](https://stackoverflow.com/questions/18321032/how-to-get-chrome-to-allow-mixed-content) dla danej strony. Innym wyjściem jest zakupienie płatnej wersji exchangeratesapi.io albo skorzystanie z innego API (jeśli takie znajdziesz, to będę wdzięczny za informację! ;)).

&nbsp;

Wynik działania aplikacji mógłby się sprowadzać do poniższej tabeli:

| Waluta | Ilość | Data zakupu | Cena zakupu | Obecny kurs | Obecna wartość | Zysk/Strata    |
| ------ | ----- | ----------- | ----------- | ----------- | -------------- | -------------- |
| EUR    | 100   | 2020-01-01  | 4.38        | 4.49        | 449.00         | 11.00 (+2.5%)  |
| EUR    | 100   | 2020-03-01  | 4.48        | 4.49        | 449.00         | 1.00 (+0.2%)   |
| USD    | 100   | 2020-03-01  | 3.91        | 3.71        | 371.00         | -20.00 (-5.2%) |

Stanem zarządzaj przy pomocy Reduxa, wykorzystując oddzielny Magazyn dla danych z localStorage ([przykład](https://dev.to/link2twenty/react-redux-and-localstorage-2lih)) oraz dla API. Całość połącz przy pomocy `.combineReducers()`.

Stwórz projekt tak, aby każdy z elementów w łatwy sposób można było przenieść do innej aplikacji.

PS Jeśli uznasz, że Twoja aplikacja powinna być bardziej rozbudowana, możesz przechowywać historię sprawdzeń danej waluty w localStorage i [generować wykres](https://github.com/jerairrest/react-chartjs-2) prezentujący poziom zysków lub strat dla danej pozycji.

&nbsp;

> ⭐ **\*README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!\***
>
> 🎁 _Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**._
