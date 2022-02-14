
class Node:
    def __init__(self, data): # any value it wants 7 , 10 , 12
        self.data = data # the prerecs for building only one node
        self.next = None # we are only creating the parameters for 1 node here when there are 2 nodes that is where your next value will be set


class LinkedList:
    def __init__(self): 
        self.head = None

    def print_list(self):
        cur_node = self.head # the current node willequal the head value 
        while cur_node: # this will iteate through the list 
            print(cur_node.data) # it will print every node in the list
            cur_node = cur_node.next # until there is no more data in that list 

    def append(self, data): # adding self gives us access to the node data, data is passed through this function because we are appending the data
        new_node = Node(data) # data that we are trying to add is equal to the NODE(we created)

        if self.head is None: # checking to see if a list even exists 
            self.head = new_node # the value appended will be the head because there is only now one value in this list 
            return

        last_node = self.head # if there already is a node in the list 
        while last_node.next: 
            last_node = last_node.next # we are are changing the last value to have a next value 
        last_node.next = new_node #  will equal the head value of the node 

    def prepend(self, data):
        new_node = Node(data)

        new_node.next = self.head
        self.head = new_node

    def insert_after_node(self, prev_node, data):
      if not prev_node:
        return "no node in list"
      
      new_node = Node(data)
      new_node.next = prev_node.next
      prev_node.next = new_node


llist = LinkedList()
llist.insert_after_node(llist.head, "ever")
llist.append(9)
llist.append(19)
llist.print_list()