javascript: (function() {
    selectGender();
    input0BOD();

    function input0BOD() {
        enterValue(document.getElementsByName('fullName')[0], randomChars(5) + randomChars(5));
        enterValue(document.getElementsByName('primaryPhone')[0], '09' + randomString(8, '0123456789'));
        enterValue(document.getElementsByName('income')[0], randomIntFromInterval(10000000, 20000000));
        enterValue(document.getElementsByName('idNumber')[0], randomString(12, '0123456789'));
        enterValue(document.getElementsByName('day')[0], randomIntFromInterval(1, 31));
        enterValue(document.getElementsByName('month')[0], randomIntFromInterval(1, 12));
        enterValue(document.getElementsByName('year')[0], randomIntFromInterval(1991, 2001));
    }

    function selectGender() {
        if (randomString(1, '01') === '0') clickOnObject(document.getElementsByName('genderCode')[0]);
        else clickOnObject(document.getElementsByName('genderCode')[1]);
    }

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function enterValue(obj, var1) {
        let input = obj;
        let lastValue = input.value;
        input.value = var1;
        let event = new Event('input', {
            bubbles: true
        });
        event.simulated = true;
        let tracker = input._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        input.dispatchEvent(event);
    }

    function clickOnObject(obj) {
        if (obj.onclick) {
            obj.onclick();
        } else if (obj.click) {
            obj.click();
        }
    }

    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

    function randomPhoneNumber(length) {
        return '0' + randomString(length - 1, '0123456789');
    }

    function randomChars(length) {
        return randomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
})();
