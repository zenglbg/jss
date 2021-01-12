import pyhanlp
from text import text

summary = pyhanlp.HanLP.extractSummary(text, 3)

fo = open('aaa.txt', 'w')
fo.write(summary[0])

fo.close()
print(summary)
