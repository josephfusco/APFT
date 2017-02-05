(function ($) {

	$(document).ready(function () {
		var standardsData;
		var results = $('#results');

		/**
		 * Load APFT json data.
		 */
		$.getJSON('data/standards.json', function (data) {
			standardsData = data;
		});

		/**
		 * Calculate score.
		 */
		$('#calculator').submit(function (e) {
			results.empty();

			var g = $('#gender').val();
			var a = $('#age').val();
			var pu = $('#pu').val();
			var su = $('#su').val();
			var t = $('#min').val() + $('#sec').val();

			// find the next lowest key for run time if there isn't an exact match
			var runTimes = standardsData[g]['run'];
			var lookup = lowerKeyFinder(runTimes);
			t = lookup(t);

			// grab the score from the json data
			var puScore = standardsData[g]['push-ups'][pu][0][a];
			var suScore = standardsData[g]['sit-ups'][su][0][a];
			var runScore = standardsData[g]['run'][t][0][a];

			// total up scores
			var totalScore = puScore + suScore + runScore;

			var resultTemplate = $( "<p>Push Up Score: "+puScore+"</p><p>Sit Up Score: "+suScore+"</p><p>Run Score: "+runScore+"</p><p>Total Score: "+totalScore+"</p>" );
			results.append(resultTemplate);

			return false; // prevent form submission
		});

		/**
		 * Reset form.
		 */
		$('#reset').click(function () {
			$(this).closest('form').find('input[type=number], input[type=text]').val('');
			results.empty();

			return false; // prevent form submission
		});

		/**
		 * Find the next lowest key.
		 */
		var lowerKeyFinder = function (time) {
			var keys = Object.keys(time);
			keys.sort(function (a, b) {
				return a - b;
			});

			return function (val) {
				var maxKey = -1;
				for (var i = 0, len = keys.length; i < len; i++) {
					if (maxKey < 0 || keys[i] < val) {
						maxKey = Math.max(maxKey, keys[i]);
					}
				}
				return maxKey;
			};
		};

	});

})(jQuery);
