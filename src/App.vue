<template>
  <div id="app">
    <eox-page-layout>
      <slot name="page-content">
        <eox-markdown id="readme">
Readme
======

Many thanks for purchasing our [EOxCloudless] Sentinel-2 2018 product.

You find here our Sentinel-2 cloudless 2018 GeoTIFFs - Viewing Basic product.

Data Format and Structure
-------------------------

Tiles are stored as GeoTIFFs containing three 8-bits bands (red, green, blue)
each in a non-projected geographic coordinate system (WGS84, EPSG 4326).
Compression used is DEFLATE and tile shape is 4096x4096 pixels.

Tiles are structured in a tile pyramid scheme based on the WMTS-simple profile
defined by the OGC: http://docs.opengeospatial.org/is/13-082r2/13-082r2.html#30

To optimize tile numbers, they are combined into 16x16 bigger tiles
(metatiles), hence the usual WMTS tile indices (zoom, column, row) don't apply
exactly. To identify the correct tiles per zoom level, one must use the column
and row identifier from the zoom level above (z-4).

The zoom levels available are 0-13, where 13 resembles the original resolution
(10 m).

Paths to the tiles are following the schema: `/{zoom}/{column}/{row}.tif`

License
-------

Our Sentinel-2 cloudless 2018 GeoTIFFs - Viewing Basic data is provided under
our "EOX Commercial Attribution-RestrictedUse 1.1 License" ([human readable
version] or [eox_commercial_attribution-restricteduse_1.1_license_deed.pdf](eox_commercial_attribution-restricteduse_1.1_license_deed.pdf),
[legal text] or [eox_commercial_attribution-restricteduse_1.1_license.pdf](eox_commercial_attribution-restricteduse_1.1_license.pdf)).

Whenever you use our Sentinel-2 cloudless 2018 GeoTIFFs - Viewing Basic data
an attribution has to be provided. It shall read:

*"Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2017 & 2018)".*

Where possible it shall include links as follows:

```
&lt;a href="https://s2maps.eu"&gt;Sentinel-2 cloudless - https://s2maps.eu&lt;/a&gt; by &lt;a href="https://eox.at"&gt;EOX IT Services GmbH&lt;/a&gt; (Contains modified Copernicus Sentinel data 2017 &amp; 2018)
```

Terms
-----

Our [General Terms and Conditions] or [general_terms_and_conditions.pdf](general_terms_and_conditions.pdf)
apply.


Thanks again for your purchase and don't hesitate to send any questions to
cloudless@eox.at.


[EOxCloudless]: https://cloudless.eox.at
[human readable version]: https://cloudless.eox.at/license-deed
[legal text]: https://cloudless.eox.at/license-legal
[General Terms and Conditions]: https://cloudless.eox.at/terms-conditions
        </eox-markdown>
        <eox-markdown>
Downloads
=========
[eox_commercial_attribution-restricteduse_1.1_license_deed.pdf](eox_commercial_attribution-restricteduse_1.1_license_deed.pdf)\
[eox_commercial_attribution-restricteduse_1.1_license.pdf](eox_commercial_attribution-restricteduse_1.1_license.pdf)\
[general_terms_and_conditions.pdf](general_terms_and_conditions.pdf)\
[LICENSE](LICENSE)\
[metadata.json](metadata.json)
        </eox-markdown>
        <eox-button :color="'eox'" :icon="'cloud_download'" :link="'//eox.at'">Access File Folder</eox-button>
      </slot>
    </eox-page-layout>
  </div>
</template>

<script>
import EoxButton from '@/components/EoxButton.vue'
import EoxLogo from '@/components/EoxLogo.vue'
import EoxMarkdown from './components/EoxMarkdown.vue'
import EoxPageLayout from './components/EoxPageLayout.vue'

export default {
  name: 'app',
  components: {
    EoxButton,
    EoxLogo,
    EoxMarkdown,
    EoxPageLayout
  }
}
</script>

<style>

</style>
