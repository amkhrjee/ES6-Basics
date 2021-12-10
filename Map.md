The **Map** object holds key-value pairs and _remembers the original insertion order of the keys_. Any value (both objects and primitive values) may be used as either a key or a value.

A `Map` object iterates its elements in insertion order - a `for...of` loop returns an aray of `[key, value]` for each iteration.

## Objects vs. Maps

`Object` is similar to `Map`—both let you set keys to
values, retrieve those values, delete keys, and detect whether something is
stored at a key. For this reason (and because there were no built-in
alternatives), `Object` has been used as `Map` historically.

However, there are important differences that make `Map` preferable in some
cases:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Accidental Keys</th>
      <td>
        A <code>Map</code> does not contain any keys by default. It only
        contains what is explicitly put into it.
      </td>
      <td>
        <p>
          An <code>Object</code> has a prototype, so it contains default keys
          that could collide with your own keys if you're not careful.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> As of ES5, this can be bypassed by using
            {{jsxref("Object.create", "Object.create(null)")}},
            but this is seldom done.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Key Types</th>
      <td>
        A <code>Map</code>'s keys can be any value (including functions,
        objects, or any primitive).
      </td>
      <td>
        The keys of an <code>Object</code> must be either a
        {{jsxref("String")}} or a {{jsxref("Symbol")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Key Order</th>
      <td>
        <p>
          The keys in <code>Map</code> are ordered in a simple, straightforward
          way: A <code>Map</code> object iterates entries, keys, and values in
          the order of entry insertion.
        </p>
      </td>
      <td>
        <p>
          Although the keys of an ordinary <code>Object</code> are ordered now,
          this was not always the case, and the order is complex. As a result,
          it's best not to rely on property order.
        </p>
        <p>
          The order was first defined for own properties only in ECMAScript
          2015; ECMAScript 2020 defines order for inherited properties as well.
          See the
          <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
            >OrdinaryOwnPropertyKeys</a
          >
          and
          <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties"
            >EnumerateObjectProperties</a
          >
          abstract specification operations. But note that no single mechanism
          iterates
          <strong>all</strong> of an object's properties; the various mechanisms
          each include different subsets of properties.
          ({{jsxref("Statements/for...in",
          "for-in")}}
          includes only enumerable string-keyed properties;
          {{jsxref("Object.keys")}} includes only own, enumerable,
          string-keyed properties;
          {{jsxref("Object.getOwnPropertyNames")}} includes own,
          string-keyed properties even if non-enumerable;
          {{jsxref("Object.getOwnPropertySymbols")}} does the same
          for just <code>Symbol</code>-keyed properties, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Size</p></th>
      <td>
        The number of items in a <code>Map</code> is easily retrieved from its
        {{jsxref("Map.prototype.size", "size")}} property.
      </td>
      <td>
        The number of items in an <code>Object</code> must be determined
        manually.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        A <code>Map</code> is an
        <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterable</a
        >, so it can be directly iterated.
      </td>
      <td>
        <p>
          <code>Object</code> does not implement an <a
            href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >iteration protocol</a
          >, and so objects are not directly iterable using the JavaScript
          <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >
          statement (by default).
        </p>
        <div class="notecard note">
          <p><strong>Note:</strong></p>
          <ul>
            <li>
              An object can implement the iteration protocol, or you can get an
              iterable for an object using <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > or <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >.
            </li>
            <li>
              The
              <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              statement allows you to iterate over the
              <em>enumerable</em> properties of an object.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Performance</th>
      <td>
        <p>
          Performs better in scenarios involving frequent additions and removals
          of key-value pairs.
        </p>
      </td>
      <td>
        <p>
          Not optimized for frequent additions and removals of key-value pairs.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialization and parsing</th>
      <td>
        <p>No native support for serialization or parsing.</p>
        <p>
          (But you can build your own serialization and parsing support for
          <code>Map</code> by using {{jsxref("JSON.stringify()")}}
          with its <em>replacer</em> argument, and by using
          {{jsxref("JSON.parse()")}} with its
          <em>reviver</em> argument. See the Stack Overflow question
          <a href="https://stackoverflow.com/q/29085197/"
            >How do you JSON.stringify an ES6 Map?</a
          >).
        </p>
      </td>
      <td>
        <p>
          Native support for serialization from {{jsxref("Object")}} to
          JSON, using {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native support for parsing from JSON to {{jsxref("Object")}},
          using {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>
