import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { business, site } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

// TEMPLATE: to be reviewed by Marta (ideally with a lawyer) before launch.
// Covers digital products sold through the site. 1:1 coaching is agreed
// separately through the application process.

export const metadata: Metadata = pageMetadata({
  path: "/regulamin",
  title: "Regulamin",
  description: `Regulamin sprzedaży produktów cyfrowych ${site.name}: zamówienia, płatności, prawo odstąpienia od umowy, reklamacje i zastrzeżenia zdrowotne.`,
});

export default function TermsPage() {
  return (
    <LegalPage title="Regulamin sprzedaży produktów cyfrowych">
      <h2>1. Informacje ogólne</h2>
      <p>
        Regulamin określa zasady sprzedaży produktów cyfrowych (e-booków i planów w formacie PDF)
        oferowanych na stronie {site.name}. Sprzedawcą jest <strong>{business.legalName}</strong>,
        prowadząca działalność pod nazwą {business.tradingName} ({business.legalForm}), adres:{" "}
        {business.address}, e-mail: <a href={`mailto:${business.email}`}>{business.email}</a>.
      </p>
      <p>
        Współpraca online 1:1 nie jest objęta tym regulaminem. Jej warunki ustalamy indywidualnie po
        konsultacji. [PLACEHOLDER] dodać link do warunków współpracy 1:1, jeśli istnieją.
      </p>

      <h2>2. Definicje</h2>
      <ul>
        <li>
          <strong>Produkt cyfrowy</strong> – treść cyfrowa dostarczana w formie pliku do pobrania,
          np. e-book z przepisami, plan treningowy lub plan żywieniowy.
        </li>
        <li>
          <strong>Kupująca</strong> – osoba, która składa zamówienie. Jeśli kupujesz jako
          konsumentka, przysługują Ci prawa opisane poniżej.
        </li>
        <li>
          <strong>Operator płatności</strong> – {business.paymentProvider}.
        </li>
      </ul>

      <h2>3. Produkty i ceny</h2>
      <ul>
        <li>Opis, format i cena każdego produktu są podane na stronie przy produkcie.</li>
        <li>
          Ceny podane są w złotych (PLN) i/lub funtach szterlingach (GBP). {business.vatNote}
        </li>
        <li>Wiążąca jest cena widoczna w chwili złożenia zamówienia.</li>
      </ul>

      <h2>4. Zamówienie i płatność</h2>
      <ol>
        <li>Po kliknięciu „Kup teraz” przechodzisz na stronę operatora płatności.</li>
        <li>Podajesz dane potrzebne do realizacji zamówienia i wybierasz metodę płatności.</li>
        <li>
          Umowa zostaje zawarta z chwilą potwierdzenia płatności. Potwierdzenie zamówienia
          otrzymasz e-mailem.
        </li>
      </ol>

      <h2>5. Dostarczenie produktu</h2>
      <p>
        Produkt cyfrowy jest udostępniany do pobrania od razu po zaksięgowaniu płatności – na stronie
        potwierdzenia i/lub w wiadomości e-mail. Do korzystania z produktu potrzebujesz urządzenia
        z dostępem do internetu, programu do odczytu plików PDF oraz aktywnego adresu e-mail.
      </p>

      <h2>6. Prawo odstąpienia od umowy (14 dni)</h2>
      <p>
        Jako konsumentka możesz odstąpić od umowy w ciągu 14 dni od jej zawarcia bez podawania
        przyczyny. Wystarczy, że napiszesz na{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a> przed upływem tego terminu. Zwrot
        płatności nastąpi w ciągu 14 dni, tą samą metodą, którą zapłaciłaś.
      </p>
      <p>
        <strong>Utrata prawa odstąpienia.</strong> Produkt cyfrowy jest dostarczany natychmiast.
        Dlatego przy zakupie prosimy Cię o wyraźną zgodę na rozpoczęcie dostarczania treści
        cyfrowych przed upływem 14 dni i o potwierdzenie, że wiesz, że w ten sposób tracisz prawo
        odstąpienia od umowy. Jeśli wyrazisz tę zgodę i dostarczanie się rozpocznie (np. plik
        zostanie udostępniony do pobrania), prawo odstąpienia wygasa. Wynika to z regulacji 37
        Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, a dla
        konsumentek mieszkających w Polsce – z art. 38 ust. 1 pkt 13 ustawy o prawach konsumenta.
        Potwierdzenie udzielenia zgody otrzymasz e-mailem.
      </p>

      <h2>7. Reklamacje i zwroty za wadliwy produkt</h2>
      <p>
        Produkt musi być zgodny z opisem, nadawać się do celu, w jakim jest sprzedawany, i być
        zadowalającej jakości (Consumer Rights Act 2015). Utrata prawa odstąpienia nie ogranicza tych
        praw. Jeśli plik jest uszkodzony, nie da się go otworzyć albo jest niezgodny z opisem, napisz
        na <a href={`mailto:${business.email}`}>{business.email}</a>, podając datę zakupu i opis
        problemu.
      </p>
      <p>
        Odpowiem w ciągu 14 dni. Jeśli reklamacja jest zasadna, dostarczę poprawny plik, a jeśli to
        niemożliwe – zwrócę część lub całość ceny.
      </p>

      <h2>8. Prawa autorskie i licencja</h2>
      <p>
        Produkty są chronione prawem autorskim. Kupując produkt, otrzymujesz niewyłączną licencję na
        korzystanie z niego na własny, prywatny użytek. Nie możesz go udostępniać, odsprzedawać,
        kopiować w celu rozpowszechniania ani publikować w całości lub w części.
      </p>

      <h2>9. Zastrzeżenia zdrowotne</h2>
      <ul>
        <li>
          Produkty i treści {site.name} mają charakter edukacyjny i informacyjny. Nie są poradą
          medyczną, diagnozą ani leczeniem i nie zastępują konsultacji z lekarzem lub dietetykiem
          klinicznym.
        </li>
        <li>
          Przed rozpoczęciem nowej diety lub planu treningowego skonsultuj się z lekarzem –
          szczególnie jeśli jesteś w ciąży, karmisz piersią, przyjmujesz leki, masz choroby
          przewlekłe lub kontuzje.
        </li>
        <li>
          Rezultaty są indywidualne i zależą m.in. od stanu zdrowia, stylu życia i zaangażowania.
          Nie gwarantuję osiągnięcia konkretnych efektów, w tym określonej utraty masy ciała.
        </li>
        <li>
          Jeśli podczas ćwiczeń poczujesz ból, zawroty głowy lub duszność, przerwij trening i
          skontaktuj się z lekarzem.
        </li>
      </ul>

      <h2>10. Odpowiedzialność</h2>
      <p>
        Nic w tym regulaminie nie wyłącza ani nie ogranicza odpowiedzialności, której nie można
        wyłączyć ani ograniczyć na mocy prawa, w tym odpowiedzialności za śmierć lub uszkodzenie
        ciała spowodowane zaniedbaniem ani ustawowych praw konsumenta.
      </p>

      <h2>11. Dane osobowe</h2>
      <p>
        Zasady przetwarzania danych opisuje <Link href="/polityka-prywatnosci">Polityka prywatności</Link>.
      </p>

      <h2>12. Prawo właściwe i spory</h2>
      <p>
        Umowy zawierane na podstawie regulaminu podlegają prawu Anglii i Walii, a spory rozstrzygają
        sądy Anglii i Walii. Jeśli jesteś konsumentką mieszkającą w innym kraju (np. w Polsce),
        zachowujesz ochronę, jaką dają Ci bezwzględnie obowiązujące przepisy prawa Twojego kraju,
        i możesz dochodzić roszczeń przed sądem właściwym dla miejsca zamieszkania.
      </p>
      <p>
        Zanim skierujesz sprawę do sądu, napisz do mnie – większość spraw da się wyjaśnić szybko
        i polubownie.
      </p>

      <h2>13. Zmiany regulaminu</h2>
      <p>
        Mogę zmienić regulamin, np. w związku ze zmianą przepisów lub operatora płatności. Do zamówień
        złożonych przed zmianą stosuje się wersję obowiązującą w chwili zakupu.
      </p>
    </LegalPage>
  );
}
