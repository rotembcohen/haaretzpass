# HaaretzPass

Switches User-Agent string to pass Haaretz payment wall

This is a chrome extension I've made that disables the annoying payment wall on Haaretz website by changing the browser's user agent. I've made this after getting frustrated with all the other solutions for this that are available online.

**Highlights:**

- No configuration required
- Permissions only on haaretz URLs, Browsing other websites would be unchanged
- Easily disabled and re-enabled
- Works for both haaretz.co.il and haaretz.com

**Instructions:**

A. [Download](https://github.com/rotembcohen/haaretzpass/releases/download/1.0/HaaretzPass.crx) the crx file (you don't need the Source folder)

B. Install it in Chrome (open chrome://extensions, drag and drop the file).

C. A green Haaretz icon would appear in your browser toolbar.

D. Go to haaretz website and enter a premium article (marked by a grey key icon). If you already were in an Haaretz webpage when you installed the extension, you should refresh the page.

E. Enjoy!

This code has no malware or any data collecting sh*t. 

**Credits:**

This has started as a modification of the chrome extenstion [User-Agent Switcher](https://chrome.google.com/webstore/detail/user-agent-switcher/lkmofgnohbedopheiphabfhfjgkhfcgf?hl=en).

**F.A.Q**

Q: I get "crx_magic_number_invalid" error

A: Make sure you have the latest chrome version and that the crx file isn't corrupt

Q: I still can't see Haaretz premium articles

A: Make sure the extension was installed (green icon ![green icon](https://github.com/rotembcohen/haaretzpass/blob/master/Source/icon-active.png) appears in toolbar) and that you do not use any other extensions that change the browser's user-agent configuration

Q: Still not working

A: Contact rotembcohen@gmail.com (thanks!)